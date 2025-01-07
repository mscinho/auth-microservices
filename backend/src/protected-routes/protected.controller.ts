import { Controller, Get } from '@nestjs/common';
import { Roles, Unprotected } from 'nest-keycloak-connect';

@Controller('protected')
export class ProtectedController {
  @Get()
  // @Roles({ roles: ['realm:admin'] }) // Apenas usuários com a role 'admin' podem acessar esta rota
  getProtectedResource() {
    return 'This is a protected resource';
  }

  @Get('public')
  @Unprotected() // Esta rota é pública e não requer autenticação
  getPublicResource() {
    return 'This is a public resource';
  }
}