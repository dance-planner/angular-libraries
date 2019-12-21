import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() individualImpressumData: any = this.getIndividualImpressumData();
  @Input() disclaimerStylingData: any = this.getDisclaimerStylingData();

  public getDisclaimerStylingData(): any {
    return {
      textAlign: 'center',
      bgColor: 'inherit'
    };
  }
  public getIndividualImpressumData(): any {
    return {
      name: 'Michael Spengler',
      street: 'Zollhofgarten 8',
      extension: '',
      zipCode: '69115',
      city: 'Heidelberg',
      phoneNumber: '0049 151 67 83 38 69',
      eMail: 'michael@spengler.biz',
      textAlign: 'center',
      bgColor: 'inherit'
    };
  }
}
