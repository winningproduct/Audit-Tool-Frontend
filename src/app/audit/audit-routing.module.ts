import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuditComponent } from "./audit.component";
import { ViewProjectsComponent } from "./containers/view-projects/view-projects.component";
import { ViewPhasesComponent } from "./containers/view-phases/view-phases.component";

const routes: Routes = [
  { path: "", component: AuditComponent },
  { path: "projects", component: ViewProjectsComponent },
  { path: "phases", component: ViewPhasesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule {}
