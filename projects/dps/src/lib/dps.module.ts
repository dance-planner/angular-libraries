import { NgModule } from '@angular/core';
import { DpsComponent } from './dps.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DpsComponent],
  imports: [ CommonModule
  ],
  exports: [DpsComponent]
})
export class DpsModule { }
