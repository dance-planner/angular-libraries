import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgRangeModule } from '../../../ng-range/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgRangeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
