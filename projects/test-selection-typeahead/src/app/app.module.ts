import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SelectionTypeaheadModule } from '../../../selection-typeahead/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SelectionTypeaheadModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
