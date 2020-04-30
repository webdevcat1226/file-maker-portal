import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

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
    MatRadioModule,
    UiKitModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [

  ]
})
export class HomeModule { }
