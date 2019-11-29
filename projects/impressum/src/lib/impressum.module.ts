import { NgModule } from '@angular/core';
import { ImpressumComponent } from './impressum.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ImpressumComponent],
  imports: [ CommonModule
  ],
  exports: [ImpressumComponent]
})
export class ImpressumModule { }
