import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarModule } from '../../../navbar/src/public-api';
import { DisclaimerModule } from '../../../disclaimer/src/public-api';
import { DpsModule } from '../../../dps/src/public-api';
import { ImpressumModule } from '../../../impressum/src/public-api';
import { CardsModule } from '../../../cards/src/public-api';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SelectionTypeaheadModule } from '../../../selection-typeahead/src/public-api';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactModule } from 'dance-planner-contact';
import { DancePlannerCardsModule } from 'dance-planner-cards';
import { NgRangeModule } from 'ng-range';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgRangeModule,
    DancePlannerCardsModule,
    ContactModule,
    NgbModule,
    FormsModule,
    SelectionTypeaheadModule,
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
