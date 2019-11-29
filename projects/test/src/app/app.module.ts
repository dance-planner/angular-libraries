import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImpressumModule } from '../../../impressum/src/public-api';
import { ImagesGridModule } from '../../../images-grid/src/public-api';
import { DisclaimerModule } from '../../../disclaimer/src/public-api';
import { DpsModule } from '../../../dps/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ImpressumModule, DpsModule, ImagesGridModule, DisclaimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
