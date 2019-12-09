import { NgModule } from '@angular/core';
import { SelectionTypeaheadComponent } from './selection-typeahead.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SelectionTypeaheadComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports: [SelectionTypeaheadComponent]
})
export class SelectionTypeaheadModule { }
