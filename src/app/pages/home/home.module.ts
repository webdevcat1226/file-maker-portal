import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { UiKitModule } from '../../common/ui-kit/ui-kit.module';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // project scope
    UiKitModule
  ],
  exports: [

  ]
})
export class HomeModule { }
