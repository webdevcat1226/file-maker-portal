import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ViewDetailHomeComponent } from './view-detail/view-detail-home/view-detail-home.component';
import { ViewDetailCaseComponent } from './view-detail/view-detail-case/view-detail-case.component';
import { InspectionsComponent } from './inspections/inspections.component';
import { ViewDetailAmendmentsComponent } from './view-detail/view-detail-amendments/view-detail-amendments.component';


@NgModule({
  declarations: [ApplicationsComponent, ViewLayoutComponent, ViewDetailComponent, ViewDetailHomeComponent, ViewDetailCaseComponent, InspectionsComponent, ViewDetailAmendmentsComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
