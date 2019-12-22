import { NgModule } from '@angular/core';
import { NgRangeComponent } from './ng-range.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NgRangeComponent],
  imports: [
    FormsModule
  ],
  exports: [NgRangeComponent]
})
export class NgRangeModule { }
