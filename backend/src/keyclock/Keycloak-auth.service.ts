import { Injectable } from '@nestjs/common';
import axios from 'axios';

const keycloakUrl = process.env.KEYCLOAK_URL || 'http://host.docker.internal:8080/realms/smart-tech/protocol/openid-connect/token';

@Injectable()
export class KeycloakAuthService {
  private authServerUrl = keycloakUrl;
  private clientId = 'nest';
  private clientSecret = '3UDBJQhUwFRmgW58aGyuuH4QQBBETLxi';

  async authenticate(username: string, password: string): Promise<any> {
    const params = new URLSearchParams();
    params.append('client_id', this.clientId);
    params.append('client_secret', this.clientSecret);
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', 'password');

    try {
      const response = await axios.post(this.authServerUrl, params);
      return response.data;
    } catch (error) {
      console.error('Error during authentication:', error.response ? error.response.data : error.message); // Adicionando log para verificar o erro
      throw new Error('Authentication failed');
    }
  }
}