import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeycloakModule } from './keyclock/keycloak.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { ProtectedModule } from './protected-routes/protected.module';
import { CombinedGuard } from './guard/combined.guard';

@Module({
  imports: [KeycloakModule, AuthModule, ProtectedModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: CombinedGuard,
    },
  ],
})
export class AppModule {}
