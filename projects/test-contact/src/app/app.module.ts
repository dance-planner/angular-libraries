import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactModule } from '../../../contact/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ContactModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
