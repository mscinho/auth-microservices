import { Controller, Post, Body } from '@nestjs/common';
import { KeycloakAuthService } from '../keyclock/Keycloak-auth.service';
import { Unprotected } from 'nest-keycloak-connect';


@Controller('auth')
export class AuthController {
  constructor(private readonly keycloakAuthService: KeycloakAuthService) {}

  @Unprotected()
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.keycloakAuthService.authenticate(body.username, body.password);
  }
}