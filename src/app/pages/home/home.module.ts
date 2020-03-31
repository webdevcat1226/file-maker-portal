import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { UiKitModule } from '../../common/ui-kit/ui-kit.module';

import { HomeComponent } from './home.component';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { ApplicationModalComponent } from './application-modal/application-modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    QuoteModalComponent,
    ApplicationModalComponent
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
