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

  @Unprotected()
  @Post('register')
  async register(@Body() body: { firstName: string; lastName: string; username: string; password: string }) {
    return this.keycloakAuthService.registerUser(body.firstName, body.lastName, body.username, body.password);
  }
}