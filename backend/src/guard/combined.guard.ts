import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';

@Injectable()
export class CombinedGuard implements CanActivate {
  constructor(
    private readonly authGuard: AuthGuard,
    private readonly resourceGuard: ResourceGuard,
    private readonly roleGuard: RoleGuard,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const canActivateAuth = await this.authGuard.canActivate(context);
    if (!canActivateAuth) {
      return false;
    }

    const canActivateResource = await this.resourceGuard.canActivate(context);
    if (!canActivateResource) {
      return false;
    }

    const canActivateRole = await this.roleGuard.canActivate(context);
    if (!canActivateRole) {
      return false;
    }

    return true;
  }
}