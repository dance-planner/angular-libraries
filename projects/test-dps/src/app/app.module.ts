import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DpsModule } from '../../../dps/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DpsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
