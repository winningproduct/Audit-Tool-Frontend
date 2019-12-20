import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ngx bootstrap modules import */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';

/* fontawesome module import */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { ViewProjectsComponent } from './containers/view-projects/view-projects.component';
import { ViewPhasesComponent } from './containers/view-phases/view-phases.component';


@NgModule({
  declarations: [AuditComponent, ViewProjectsComponent, ViewPhasesComponent],
  imports: [
    CommonModule,
    AuditRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    FontAwesomeModule
  ]
})
export class AuditModule { }
