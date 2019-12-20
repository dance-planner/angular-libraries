import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DisclaimerModule } from '../../../disclaimer/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DisclaimerModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
