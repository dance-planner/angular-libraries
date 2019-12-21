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
  selector: 'lib-dance-planner-card',
  templateUrl: './dance-planner-card.component.html',
  styleUrls: ['./dance-planner-card.component.css']
})
export class DancePlannerCardComponent implements OnInit {

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
    this.showDetails = !this.showDetails;
  }

  public clickShare() {
    this.shareMode = !this.shareMode;
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
