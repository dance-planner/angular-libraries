import { Component, OnInit, Input } from '@angular/core';
import { ICardData } from './card.interfaces';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor() { }

  @Input() public card: ICardData = this.getDefaultData();
  @Input() public cardStyling: any = this.getDefaultStyle();
  @Input() public titleStyling: any = this.getTitleDefaultStyle();
  @Input() public infoStyling: any = this.getInfoDefaultStyle();
  @Input() public detailsStyling: any = this.getDetailsStyling();
  @Input() public imageDivStyling: any = this.getImageDivDefaultStyle();
  @Input() public shareButtonText: any = 'Invite Friends';

  public showDetails = false;
  public shareMode = false;
  public shareLongText = 'Share This Link to Invite Friends';
  public furtherInfo = 'Further Information';

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
    // alert('Link copied');
  }

  getDefaultStyle(): any {
    return {
      'background-color': 'white',
      'max-width': '10px'
    };
  }


  getTitleDefaultStyle(): any {
    return {
      'font-size': '33px',
      color: 'black'
    };
  }

  getDetailsStyling(): any {
    return {
      'font-size': '60px',
      color: 'yellow'
    };
  }

  getInfoDefaultStyle(): any {
    return {
      'font-size': '60px',
      color: 'black'
    };
  }

  getImageDivDefaultStyle(): any {
    return {
      'font-size': '60px',
      color: 'black'
    };
  }


  ngOnInit() {
  }

  public getDefaultData(): ICardData {
    return {
      title: 'my title',
      info: 'my info',
      details: 'my details',
      linkToThisItem: 'whatever-link',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'https://fance-stiftung.de/api/app/app-images/logo.png'
    };
  }

  public clickCard() {
    this.showDetails = !this.showDetails;
  }

}
