import { Module } from '@nestjs/common';
import { KeycloakConnectModule, KeycloakConnectOptions } from 'nest-keycloak-connect';
import { KeycloakAuthService } from './Keycloak-auth.service';


@Module({
  providers: [KeycloakAuthService],
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://host.docker.internal:8080',
      realm: 'smart-tech',                        
      clientId: 'nest',              
      secret: '3UDBJQhUwFRmgW58aGyuuH4QQBBETLxi',                
    } as KeycloakConnectOptions),
  ],
  exports: [KeycloakConnectModule, KeycloakAuthService],
})
export class KeycloakModule {}