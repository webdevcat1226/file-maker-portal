import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      {
        path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      }, {
        path: 'quote', loadChildren: () => import('./pages/quote/quote.module').then(m => m.QuoteModule)
      }, {
        path: 'applications', loadChildren: () => import('./pages/applications/applications.module').then(m => m.ApplicationsModule)
      }, {
        path: 'refresh', loadChildren: () => import('./pages/refresh/refresh.module').then(m => m.RefreshModule)
      }, {
        path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
      }, {
        path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)
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
