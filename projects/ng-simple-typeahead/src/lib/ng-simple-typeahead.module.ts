import { NgModule } from '@angular/core';
import { NgSimpleTypeaheadComponent } from './ng-simple-typeahead.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgSimpleTypeaheadComponent],
  imports: [
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    FormsModule
  ],
  exports: [NgSimpleTypeaheadComponent]
})
export class NgSimpleTypeaheadModule { }
