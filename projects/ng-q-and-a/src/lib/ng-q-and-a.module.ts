import { NgModule } from '@angular/core';
import { NgQAndAComponent } from './ng-q-and-a.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NgQAndAComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  exports: [NgQAndAComponent]
})

export class NgQAndAModule { }
