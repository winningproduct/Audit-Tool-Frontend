import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserApiService } from '../api/user.api.service';
import { AmplifyService } from 'aws-amplify-angular';
import { get } from 'lodash';

@Injectable()
export class AuthService {
  idToken: string;
  constructor(
    public jwtHelper: JwtHelperService,
    public userApiService: UserApiService,
    private auth: AmplifyService
    ) {
  }
  public async isAuthenticated() {
    try {
      const session = await Auth.currentSession();
      this.idToken = session.getIdToken().getJwtToken();
      if (!this.jwtHelper.isTokenExpired(this.idToken)) {
        return true;
     } else {
       return false;
     }
    } catch ( err ) {
      return false;
    }
  }

  public async getCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser({bypassCache: false});
      const result = await this.userApiService.get(user.attributes.email);
      return result;
    } catch (err) {
    }
  }

  getToken() {
    const session = this.auth.auth();
    const token = get(session, 'user.signInUserSession.idToken.jwtToken');
    if ( !token) {
      return this.idToken;
    }
    this.idToken = token;
    return this.idToken;
  }
}
