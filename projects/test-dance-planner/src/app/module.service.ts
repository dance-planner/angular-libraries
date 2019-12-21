import { Injectable } from '@angular/core';
import { INavbarData } from '../../../navbar/src/public-api';
import { TextService, ITexts } from './text.service';
import { ICardData } from '../../../card/src/public-api';
import { IEvent, BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  public disclaimerStylingData(): any {
    return {
      textAlign: 'inherit',
      bgColor: 'inherit'
    };
  }
  public getIndividualImpressumData(): any {
    return {
      name: 'Michael Spengler',
      street: 'Zollhofgarten 8',
      extension: '',
      zipCode: '69115',
      city: 'Heidelberg',
      phoneNumber: '0049 151 67 83 38 69',
      eMail: 'michael@spengler.biz',
      textAlign: 'center',
      bgColor: 'inherit'
    };
  }

  public constructor(private textService: TextService) {

  }

  public getCardsFromEvents(events: IEvent[]): ICardData[] {
    const cards: ICardData[] = [];
    for (const event of events) {

      const card: ICardData = {
        title: event.title,
        info: event.dance,
        details: event.comments,
        linkToThisItem: `${window.location}/?=${event.id}`,
        linkToFurtherInfo: event.link,
        imageURL: `${BackendService.backendURL}api/events/${event.posterURL}`
      };

      cards.push(card);
    }

    return cards;
  }


  public getNavBarData(language: string): INavbarData {
    const texts: ITexts = this.textService.getText(language);
    return {
      // replace the following by your data...
      logoURL: 'https://fance-stiftung.de/api/app/app-images/logo.png',
      appTitle: 'App Title',
      menuEntries: [{
        isActive: true,
        text: texts.info.findEvents,
        href: '/find',
      },
      {
        isActive: false,
        text: texts.info.createEvents,
        href: '/create',
      },
      {
        isActive: false,
        text: texts.info.useAsApp,
        href: '/app',
      },
      {
        isActive: false,
        text: texts.info.furtherFunctions,
        href: '/furtherFunctions',
      },
      {
        isActive: false,
        text: texts.info.contact,
        href: '/contact',
      }]
    };
  }


  public getCardStyle(): any {
    return {
      'margin-top': '10vh',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'max-width': '70em',
      border: 'solid #000',
      'text-align': 'center',
      'background-color': 'inherit',
      color: 'rgb(213,54,84)'
    };
  }

  public getCardTitleStyle(): any {
    return {
      'text-align': 'center',
      'background-color': 'inherit',
      'font-size': '42px',
      color: 'rgb(213,54,84)'
    };
  }

  public getCardInfoStyle(): any {
    return {
      'text-align': 'center',
      'background-color': 'inherit',
      'font-size': '24px',
      color: 'rgb(93,188, 210)'
    };
  }

  // public getCards(): ICardData[] {
  //   return this.backendService.getEvents();
  // }

}
