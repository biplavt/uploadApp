import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CustExtBrowserXhr} from './cust-ext-browser-xhr';
import { BrowserXhr } from '@angular/http';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: BrowserXhr, useClass:CustExtBrowserXhr},],
  bootstrap: [AppComponent]
})
export class AppModule {}
