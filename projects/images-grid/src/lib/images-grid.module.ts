import { NgModule } from '@angular/core';
import { ImagesGridComponent } from './images-grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ImagesGridComponent],
  imports: [ CommonModule
  ],
  exports: [ImagesGridComponent]
})
export class ImagesGridModule { }
