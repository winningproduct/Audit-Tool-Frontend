import { Component } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auditTool';
  currentUser: any;
  userName: string;
  constructor(public authService: AuthService) {
  // Subscribe to IsSignIn and then update the user in NgRxStore
  // Also update the interceptor
    this.getUser();
  }

  async getUser() {
    this.currentUser = await this.authService.getCurrentUser();
    this.userName = this.currentUser[0].firstName + ' ' + this.currentUser[0].lastName;
    console.log(this.userName);
  }

  OnInit() {
  }
}

