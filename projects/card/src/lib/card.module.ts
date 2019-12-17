import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [CardComponent],
  imports: [
    ScrollingModule,
    CommonModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
