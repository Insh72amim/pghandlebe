import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TokenVerifyResponse, TOwner } from 'src/db/types/entity.types';
import { Owner } from 'src/db/entities/owner.entity';
import { ErrorDTO } from 'src/lib/dtos/error.dto';
import { ApiTags } from '@nestjs/swagger';
import { AcessTokenDTO, OwnerSignInRequestDTO, OwnerSignUpRequestDTO } from 'src/lib/dtos/request/auth.request.dto';

@ApiTags('1. Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() owner: OwnerSignUpRequestDTO): Promise<Owner | ErrorDTO> {
    return this.authService.signup(owner);
  }

  @Post('signin')
  signin(@Body() Owner: OwnerSignInRequestDTO): Promise<Owner | ErrorDTO> {
    return this.authService.signin(Owner);
  }

  @Post('verify')
  verify(@Body() token: AcessTokenDTO): Promise<TokenVerifyResponse | ErrorDTO> {
    return this.authService.verifyToken(token);
  }
}
