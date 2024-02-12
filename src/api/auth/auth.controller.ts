import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TOwner } from 'src/db/types/entity.types';
import { Owner } from 'src/db/entities/owner.entity';
import { ErrorDTO } from 'src/lib/dtos/error.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() owner: TOwner): Promise<Owner | ErrorDTO> {
    return this.authService.signup(owner);
  }

  @Post('signin')
  signin(@Body() Owner: TOwner): Promise<Owner | ErrorDTO> {
    return this.authService.signin(Owner);
  }
}
