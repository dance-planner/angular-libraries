import { NgModule } from '@angular/core';
import { DancePlannerCardsComponent } from './dance-planner-cards.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { DancePlannerCardModule } from 'dance-planner-card';

@NgModule({
  declarations: [DancePlannerCardsComponent],
  imports: [
    DancePlannerCardModule,
    ScrollingModule,
    CommonModule
  ],
  exports: [DancePlannerCardsComponent]
})
export class DancePlannerCardsModule { }
