import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DancePlannerCardsModule } from '../../../dance-planner-cards/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DancePlannerCardsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
