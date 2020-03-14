import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefreshRoutingModule } from './refresh-routing.module';
import { RefreshComponent } from './refresh.component';


@NgModule({
  declarations: [RefreshComponent],
  imports: [
    CommonModule,
    RefreshRoutingModule
  ]
})
export class RefreshModule { }
