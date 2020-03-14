import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      }, {
        path: 'quote', loadChildren: () => import('./pages/quote/quote.module').then(m => m.QuoteModule)
      }, {
        path: 'applications', loadChildren: () => import('./pages/applications/applications.module').then(m => m.ApplicationsModule)
      }
    ]
  }, {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
