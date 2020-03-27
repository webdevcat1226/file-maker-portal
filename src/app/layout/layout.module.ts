import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UiKitModule } from '../common/ui-kit/ui-kit.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiKitModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
