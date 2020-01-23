import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AmplifyService } from 'aws-amplify-angular';



@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {
    this.setToken();
  }
  token: any;
  public async isAuthenticated() {
    try {
      const session = await Auth.currentSession();
      this.token = session.getAccessToken().getJwtToken();
      if (!this.jwtHelper.isTokenExpired(this.token)) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  public getCurrentUser() {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    });
  }

  async setToken() {
    const userSession = await Auth.currentSession();
    const token = userSession.getIdToken().getJwtToken();
    localStorage.setItem ('token', token);
  }
}
