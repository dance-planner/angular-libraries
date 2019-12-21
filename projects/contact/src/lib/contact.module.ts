import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { DpsModule } from 'german-data-protection-statement';
import { ImpressumModule } from 'german-impressum';
import { DisclaimerModule } from 'german-legal-disclaimer';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    DpsModule,
    ImpressumModule,
    DisclaimerModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
