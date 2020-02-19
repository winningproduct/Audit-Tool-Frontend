import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './shared/services/auth/auth-guard.service';
const routes: Routes = [
  {
    path: 'audit',
    loadChildren: () => import('./audit/audit.module').then(m => m.AuditModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then(m => m.SharedModule),
      canActivate : [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
