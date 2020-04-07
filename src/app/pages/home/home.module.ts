import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { UiKitModule } from '../../common/ui-kit/ui-kit.module';

import { HomeComponent } from './home.component';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { ApplicationModalComponent } from './application-modal/application-modal.component';
import { NewQuoteModalComponent } from './new-quote-modal/new-quote-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    QuoteModalComponent,
    ApplicationModalComponent,
    NewQuoteModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // project scope
    UiKitModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [

  ]
})
export class HomeModule { }
