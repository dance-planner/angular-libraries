import { Component, OnInit } from '@angular/core';
import { INavbarData } from '../../../navbar/src/public-api';
import { ModuleService } from './module.service';
import { ICardData } from '../../../card/src/public-api';
import { BackendService } from './backend.service';
import { IIndividualImpressumData } from '../../../impressum/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public view = '/find';
  public itemSize = 400;
  public height = 3000;
  public cardDivStyling: any = this.moduleService.getCardDivStyle();
  public cardTitleStyle: any = this.moduleService.getCardTitleStyle();
  public cardInfoStyle: any = this.moduleService.getCardInfoStyle();
  public cardImageStyle: any = this.moduleService.getCardImageStyle();
  public ngStyleTypeAheadDanceStyles: any = this.moduleService.getNgStyleTypeAheadDanceStyles();
  public typeAheadConfig: any = this.moduleService.getTypeAheadConfig();
  public danceStyles: string[] = [];
  public individualImpressumData: IIndividualImpressumData = this.moduleService.getIndividualImpressumData();
  public disclaimerStylingData: any = this.moduleService.disclaimerStylingData();
  public cards: ICardData[] = []; // this.moduleService.getCards();
  public selectedCountry = 'Germany';
  public minPop = 1000;
  public dataLoadedSuccessfully = false;

  public navBarData: INavbarData = this.moduleService.getNavBarData('en');

  public constructor(private moduleService: ModuleService,
                     private backendService: BackendService) { }

  public ngOnInit() {
    this.backendService.getLandingPageData(true, this.selectedCountry, this.minPop)
    .subscribe((responseList: any[]) => {
      BackendService.responseList = responseList;
      this.cards = this.moduleService.getCardsFromEvents(responseList[0]);
      this.danceStyles = responseList[1];
      // this.handleLandingPageData(responseList);
    },
      error => {
        console.log(error.message);
        alert('Sorry too much traffic at the moment. This is just a Hobby Project. Please try again later.');
      });
  }

  public onClickMenuEntry(target: string) {
    if (target === '/landing') {
      window.location.reload();
    }

    this.view = target;
  }

  public onDanceStyleSelected(danceStyle: string) {
    alert(danceStyle);
  }

}
