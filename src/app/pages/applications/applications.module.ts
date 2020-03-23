import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ViewLayoutComponent } from './view-layout/view-layout.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';


@NgModule({
  declarations: [ApplicationsComponent, ViewLayoutComponent, ViewDetailComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
