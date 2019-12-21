import { Component, OnInit, Input } from '@angular/core';
import { ICardData } from '../event-cards/event-cards.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() public card: ICardData;
  @Input() public imageDivStyling: any;
  @Input() public infoStyling: any;
  @Input() public cardTitleStyling: any;
  @Input() public detailsStyling: any;
  @Input() public shareLongText;
  @Input() public furtherInfoText;

  public shareMode = false;
  public showDetails = false;

  constructor() { }

  ngOnInit() {
  }

  public clickCard() {

  }

  public copyText(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    selBox.setSelectionRange(0, 9999);
    document.execCommand('copy');
    document.body.removeChild(selBox);

    // alert(NavbarComponent.operatingSystem);
    alert('Successfully Copied');
  }

}
