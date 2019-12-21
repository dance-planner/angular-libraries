import { Component, OnInit, Input } from '@angular/core';

export interface ICardData {
  title: string;
  info: string;
  details: string;
  linkToThisItem: string;
  linkToFurtherInfo: string;
  imageURL: string;
}

@Component({
  selector: 'app-event-cards',
  templateUrl: './event-cards.component.html',
  styleUrls: ['./event-cards.component.css']
})
export class EventCardsComponent implements OnInit {

  @Input() public cards: ICardData[] = [];
  @Input() public cardDivStyling: any;
  @Input() public imageStyling: any;
  @Input() public infoStyling: any;
  @Input() public cardTitleStyling: any;
  @Input() public cardDetailsStyling: any;
  @Input() public itemSize;
  @Input() public viewPortHeight;

  constructor() { }

  ngOnInit() {
  }

}
