import { Component, OnInit, Input } from '@angular/core';
import { ICardData } from 'dance-planner-card';

@Component({
  selector: 'lib-dance-planner-cards',
  templateUrl: './dance-planner-cards.component.html'
})
export class DancePlannerCardsComponent implements OnInit {

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
