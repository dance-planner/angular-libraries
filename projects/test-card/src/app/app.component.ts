import { Component, Input } from '@angular/core';
import { ICardData } from '../../../card/src/lib/card.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() public cardStyling: any = this.getCardStyle();

  public cardData: ICardData = this.getCardData();

  getCardStyle(): any {
    return {
      'text-align': 'center',
      'background-color': 'red',

      color: 'white'
    };
  }

  public getCardData(): ICardData {
    return {
      title: 'test title',
      info: 'test info',
      details: 'test details'
    };
  }


}
