import { NgModule } from '@angular/core';
import { ContactOptionsComponent } from './contact-options.component';
import { CommonModule } from '@angular/common';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ContactOptionsComponent],
  imports: [
    // FontAwesomeModule,
    CommonModule
  ],
  exports: [ContactOptionsComponent]
})
export class ContactOptionsModule {

}
