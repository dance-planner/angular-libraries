import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'ng-card';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [CardsComponent],
  imports: [
    ScrollingModule,
    CardModule,
    CommonModule
  ],
  exports: [CardsComponent]
})
export class CardsModule { }
