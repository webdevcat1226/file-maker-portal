import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
// import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  }, {
    path: 'register', component: RegisterComponent
  }, {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'forgot-password', component: ForgotPasswordComponent
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
