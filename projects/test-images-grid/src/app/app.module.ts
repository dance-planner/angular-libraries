import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImagesGridModule } from '../../../images-grid/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ImagesGridModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
