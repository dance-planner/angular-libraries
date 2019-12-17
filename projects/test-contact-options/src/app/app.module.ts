import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactOptionsModule } from '../../../contact-options/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ContactOptionsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
