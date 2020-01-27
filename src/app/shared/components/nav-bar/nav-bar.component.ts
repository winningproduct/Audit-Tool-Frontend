import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUser: any;
  userName: string;
  constructor(public authService: AuthService) {
    this.getUser();
   }

  ngOnInit() {
  }
  async getUser() {
    this.currentUser = await this.authService.getCurrentUser();
    if ( this.currentUser ) {
      this.userName = this.currentUser[0].firstName + ' ' + this.currentUser[0].lastName;
    } else {
      this.userName = 'User';
    }
  }

}
