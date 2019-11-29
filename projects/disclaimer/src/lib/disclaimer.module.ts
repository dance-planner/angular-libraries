import { NgModule } from '@angular/core';
import { DisclaimerComponent } from './disclaimer.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DisclaimerComponent],
  imports: [ CommonModule
  ],
  exports: [DisclaimerComponent]
})
export class DisclaimerModule { }
