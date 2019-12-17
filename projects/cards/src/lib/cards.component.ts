import { Component, OnInit, Input } from '@angular/core';
import { ICardData } from 'ng-card';


@Component({
  selector: 'lib-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() public cards: ICardData[] = [];
  @Input() public cardStyling: any = this.getDefaultStyle();
  @Input() public itemSize = 700;
  @Input() public viewPortHeight = 3000;

  private getDefaultStyle(): any {
    return {
      'background-color': 'white',
      'max-width': '10px'
    };
  }

}
