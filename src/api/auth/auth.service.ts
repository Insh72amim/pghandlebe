import { EntityManager } from '@mikro-orm/postgresql';
import { Token } from '@mikro-orm/sql-highlighter';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Owner } from 'src/db/entities/owner.entity';
import { AcessToken, TokenVerifyResponse, TOwner } from 'src/db/types/entity.types';
import { ErrorDTO } from 'src/lib/dtos/error.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly em: EntityManager,
    private readonly jwtSerice: JwtService,
  ) {}

  async signup(owner: TOwner): Promise<Owner | ErrorDTO> {
    try {
      const newOwner = this.em.create(Owner, owner);
      await this.em.persistAndFlush(newOwner);
      return newOwner;
    } catch (error) {
      return {
        status: HttpStatus.CONFLICT,
        message: 'Error Occured in Singing Up',
        error: error,
      };
    }
  }

  async signin(owner: TOwner): Promise<(Owner & { access_token: string }) | ErrorDTO> {
    try {
      const ownerEntity = await this.em.findOne(Owner, { email: owner.email, password: owner.password });
      const access_token = await this.generateJwt(ownerEntity);
      const response = { ...ownerEntity, access_token };
      return JSON.parse(JSON.stringify(response));
    } catch (error) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'Error Occured in SignIn',
        error: error,
      };
    }
  }

  async verifyToken({ access_token }: AcessToken): Promise<TokenVerifyResponse | ErrorDTO> {
    try {
      const decoded = await this.jwtSerice.verifyAsync(access_token, { secret: process.env.JWT_SECRET });

      return {
        valid: true,
        decoded,
      };
    } catch (error) {
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'Not Authorized',
        error: error,
      };
    }
  }

  async generateJwt(owner: Owner): Promise<string> {
    const payload = {
      sub: owner.id,
      name: owner.name,
      email: owner.email,
    };

    return await this.jwtSerice.signAsync(payload, {
      expiresIn: '6h',
      secret: process.env.JWT_SECRET,
    });
  }
}
