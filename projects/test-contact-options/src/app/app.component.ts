import { Component } from '@angular/core';
import { IContactData } from '../../../contact-options/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'test-contact-options';
  public contactOptionsData: IContactData[] = this.getContactOptionsData();

  public getContactOptionsData(): IContactData[] {
    return [{
      hyperLink: 'xyzhyperlink',
      iconClass: 'xy',
      padding: ''
    }];
  }

}
