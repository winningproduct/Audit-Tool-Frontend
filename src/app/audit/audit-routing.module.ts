import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditComponent } from './audit.component';
import { ViewProductsComponent } from './containers/view-products/view-products.component';
import { ViewPhasesComponent } from './containers/view-phases/view-phases.component';

const routes: Routes = [
  { path: 'products', component: ViewProductsComponent },
  { path: 'products/:productId/phases', component: ViewPhasesComponent },
  { path: '**', component: ViewProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule {}
