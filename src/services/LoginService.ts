import Api from './Api';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default {
  async login(username: string, password: string): Promise<boolean> {
    try {
      const response = await Api().post('/login', {username, password});
      const bearerToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;
      this.setBearerToken(bearerToken);
      this.setRefreshToken(refreshToken);
      this.setGivenName(response.data.user_info.given_name);
      this.setFamilyName(response.data.user_info.family_name);
      return true;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      console.log("Error del error");
      return false;
    }
  },
  async logOut(): Promise<boolean> {
    try {
      await Api().post(`/logout?refreshToken=${localStorage.getItem('refresh_token')}`);
      localStorage.removeItem('bearer_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('given_name');
      localStorage.removeItem('family_name');
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  setBearerToken(bearer_token: string): void {
    localStorage.setItem('bearer_token', bearer_token);
  },
  setRefreshToken(refresh_token: string): void {
    localStorage.setItem('refresh_token', refresh_token);
  },
  setGivenName(given_name: string): void {
    localStorage.setItem('given_name', given_name);
  },
  setFamilyName(family_name: string): void {
    localStorage.setItem('family_name', family_name);
  },
  getBearerToken(): string | null {
    return localStorage.getItem('bearer_token');
  },
  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  },
  decodeToken(token: string): any {
    return jwt_decode(token);
  }
};


