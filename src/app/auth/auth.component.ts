import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Hub } from 'aws-amplify';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  logged: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
  ) {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          console.log('(((((((((((((((SIGNIN');
          this.isUserLogged();
          break;
        case 'signOut':
          break;
      }
    });
  }

  async isUserLogged() {
    this.logged = await this.authService.isAuthenticated();
    console.log(')))))))))))))))))' , this.logged);

    setTimeout(() => { 
      if (this.logged) {
      this.ngZone.run(() => this.router.navigate(['audit/products'])).then();
    }}, 5000);
   
  }
}
