import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
isAuth :boolean;
  constructor(public auth: AuthService, public router: Router) {
  }
  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
      const isAuthenticated = await this.auth.isAuthenticated();
    if (
      !isAuthenticated
    ) {
        window.location.href='https://audittool.auth.ap-south-1.amazoncognito.com/login?response_type=code&client_id=6r1eenlevnui1fe4epbp5vjfrn&redirect_uri=http://localhost:4200';
    }
    return true;
  }
}