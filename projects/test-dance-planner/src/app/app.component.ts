import { Component, OnInit } from '@angular/core';
import { INavbarData } from '../../../navbar/src/public-api';
import { ModuleService } from './module.service';
import { ICardData } from '../../../card/src/public-api';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public view = '/find';
  public itemSize = 400;
  public height = 3000;
  public cardStyling: any = this.moduleService.getCardStyle();
  public cardTitleStyle: any = this.moduleService.getCardTitleStyle();
  public individualImpressumData: any = this.moduleService.getIndividualImpressumData();
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

}
