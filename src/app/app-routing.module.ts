import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      {
        path: '', redirectTo: '/login', pathMatch: 'full' // without api (this is a temporary part)
      },
      {
        path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },{
        path: 'applications', loadChildren: () => import('./pages/applications/applications.module').then(m => m.ApplicationsModule)
      }, {
        path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
      }
    ]
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
