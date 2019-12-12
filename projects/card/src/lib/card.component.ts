import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public title = 'Test Title';
  @Input() public info = 'Test Info';
  @Input() public details = 'Test Details';

  constructor() { }

  ngOnInit() {
  }

  public clickCard() {

  }

}
