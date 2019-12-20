import { Component } from '@angular/core';
import { IIndividualImpressumData } from '../../../impressum/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-impressum';

  public individualImpressumData: IIndividualImpressumData = {
    name: 'your name...',
    street: 'your street...',
    extension: '...',
    zipCode: '...',
    city: '...',
    phoneNumber: '...',
    eMail: '...',
    textAlign: '...',
    bgColor: '...',
  };

}
