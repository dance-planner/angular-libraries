import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImpressumModule } from '../../../impressum/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ImpressumModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
