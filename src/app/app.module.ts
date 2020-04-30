import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
