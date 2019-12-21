import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from '../../../navbar/src/public-api';
import { ContactComponent } from './contact/contact.component';
import { DisclaimerModule } from '../../../disclaimer/src/public-api';
import { DpsModule } from '../../../dps/src/public-api';
import { ImpressumModule } from '../../../impressum/src/public-api';
import { CardsModule } from '../../../cards/src/public-api';
import { HttpClientModule } from '@angular/common/http';
import { EventCardsComponent } from './event-cards/event-cards.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EventCardComponent } from './event-card/event-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    EventCardsComponent,
    EventCardComponent
  ],
  imports: [
    ScrollingModule,
    HttpClientModule,
    CardsModule,
    ImpressumModule,
    DisclaimerModule,
    DpsModule,
    NavbarModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
