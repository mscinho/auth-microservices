import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { KeycloakModule } from "src/keyclock/keycloak.module";
import { AuthGuard, ResourceGuard, RoleGuard } from "nest-keycloak-connect";



@Module({
  controllers: [AuthController],
  imports: [KeycloakModule],
  providers: [AuthGuard, ResourceGuard, RoleGuard],
  exports: [AuthGuard, ResourceGuard, RoleGuard],
})
export class AuthModule {}