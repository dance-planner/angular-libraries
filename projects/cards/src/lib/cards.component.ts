import { Component, OnInit, Input } from '@angular/core';
import { ICardData } from 'ng-card';


@Component({
  selector: 'lib-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() public cards: ICardData[] = [];
  @Input() public cardStyling: any;
  @Input() public infoStyling: any;
  @Input() public cardTitleStyling: any;
  @Input() public itemSize;
  @Input() public viewPortHeight;

}
