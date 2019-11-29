import { Component, OnInit, Input } from '@angular/core';
import { IIndividualImpressumData } from './impressum.interfaces';

@Component({
  selector: 'lib-impressum',
  templateUrl: './impressum.component.html',
  styles: []
})
export class ImpressumComponent {
  @Input() public individualImpressumData: IIndividualImpressumData = {
    name: 'Max Mustermann',
    street: 'Musterstraße 1',
    extension: 'Wohnung 1',
    zipCode: '69115',
    city: 'Musterhausen',
    phoneNumber: '+49 (0) 151 11 11 11 1x',
    eMail: 'max@mustermann-101.com',
    textAlign: 'center',
    bgColor: 'inherit'
  };

}
