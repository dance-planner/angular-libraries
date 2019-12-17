import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgQAndAModule } from '../../../ng-q-and-a/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgQAndAModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
