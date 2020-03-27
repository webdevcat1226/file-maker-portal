import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from './spinner/spinner.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    InlineEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SpinnerComponent,
    InlineEditComponent
  ]
})
export class UiKitModule { }
