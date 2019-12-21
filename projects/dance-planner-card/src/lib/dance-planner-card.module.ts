import { NgModule } from '@angular/core';
import { DancePlannerCardComponent } from './dance-planner-card.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DancePlannerCardComponent],
  imports: [
    CommonModule
  ],
  exports: [DancePlannerCardComponent]
})
export class DancePlannerCardModule { }
