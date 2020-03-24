import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationsComponent } from './applications.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewDetailHomeComponent } from './view-detail/view-detail-home/view-detail-home.component';
import { InspectionsComponent } from './inspections/inspections.component';
import { ViewDetailCaseComponent } from './view-detail/view-detail-case/view-detail-case.component';
import { ViewDetailAmendmentsComponent } from './view-detail/view-detail-amendments/view-detail-amendments.component';

const routes: Routes = [
  {
    path: '', component: ApplicationsComponent
  },
  {
    path: 'view', component: ViewLayoutComponent, children: [
      {
        path: ':id', component: ViewDetailComponent, children: [
          {
            path: 'home', component: ViewDetailHomeComponent
          },
          {
            path: 'case', component: ViewDetailCaseComponent
          },
          {
            path: 'amendments', component: ViewDetailAmendmentsComponent
          }
        ]
      }
    ]
  },
  {
    path: 'inspections/:id', component: InspectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule {
}
