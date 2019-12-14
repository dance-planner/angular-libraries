import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardModule } from '../../../card/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CardModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
