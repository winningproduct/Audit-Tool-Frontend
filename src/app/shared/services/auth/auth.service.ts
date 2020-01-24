import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserApiService } from '../api/user.api.service';


@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService,
              public userApiService: UserApiService) {
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
}
