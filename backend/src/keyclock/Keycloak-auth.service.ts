import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class KeycloakAuthService {

  async authenticate(username: string, password: string): Promise<any> {
    const URL = `${process.env.KEYCLOAK_URL}/realms/smart-tech/protocol/openid-connect/token`;
    const params = new URLSearchParams();
    params.append('client_id', process.env.KEYCLOAK_CLIENT_ID);
    params.append('client_secret', process.env.KEYCLOAK_CLIENT_SECRET);
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', 'password');

    try {
      const response = await axios.post(URL, params);
      return response.data;
    } catch (error) {
      console.error('Error during authentication:', error.response ? error.response.data : error.message); // Adicionando log para verificar o erro
      throw new Error('Authentication failed');
    }
  }

  async registerUser(firstName: string, lastName: string, username: string, password: string): Promise<any> {
    
    const url = 'http://host.docker.internal:8080/realms/smart-tech/users';
    const body = {
      "username": username,
      "enabled": true,
      "email": "newuser@example.com",
      "firstName": firstName,
      "lastName": lastName,
      "credentials": [{
        "type": "password",
        "value": password,
        "temporary": false
      }]
    }

    try {
      const response = await axios.post(url, body);
      return response.data;
    } catch (error) {
      console.error('Error during creating user:', error.response ? error.response.data : error.message); // Adicionando log para verificar o erro
      throw new Error('creating user failed');
    }
  }
}