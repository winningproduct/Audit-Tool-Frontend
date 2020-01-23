import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AmplifyService } from 'aws-amplify-angular';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {
    this.setToken();
  }
  token: any;
  public isAuthenticated() {
    try {
      this.token = this.token;
      if (!this.jwtHelper.isTokenExpired(this.token)) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  public async getCurrentUser() {
    return await Auth.currentAuthenticatedUser({
      bypassCache: false,
    });
  }

  async setToken() {
    const userSession = await Auth.currentSession();
    this.token = userSession.getIdToken().getJwtToken();
    localStorage.setItem ('token', this.token);
  }
}
