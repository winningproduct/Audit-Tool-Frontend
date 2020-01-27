import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { AuthService } from './services/auth/auth.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AvatarModule } from 'ngx-avatar';



@NgModule({
  declarations: [SharedComponent, NavBarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AvatarModule
  ],
  exports: [NavBarComponent],
  providers: [
    AuthService,
  ]
})
export class SharedModule { }
