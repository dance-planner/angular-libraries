import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImpressumModule } from '../../../impressum/src/public-api';
import { ImagesGridModule } from '../../../images-grid/src/public-api';
import { DisclaimerModule } from '../../../disclaimer/src/public-api';
import { DpsModule } from '../../../dps/src/public-api';
import { ContactOptionsModule } from '../../../contact-options/src/public-api';
import { NavbarModule } from '../../../navbar/src/lib/navbar.module';
import { SelectionTypeaheadModule } from '../../../selection-typeahead/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SelectionTypeaheadModule,
    NavbarModule,
    BrowserModule,
    ImpressumModule,
    ContactOptionsModule,
    DpsModule,
    ImagesGridModule,
    DisclaimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
