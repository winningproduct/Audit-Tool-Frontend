import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { ViewProjectsComponent } from './containers/view-projects/view-projects.component';
import { ViewPhasesComponent } from './containers/view-phases/view-phases.component';


@NgModule({
  declarations: [AuditComponent, ViewProjectsComponent, ViewPhasesComponent],
  imports: [
    CommonModule,
    AuditRoutingModule
  ]
})
export class AuditModule { }
