import { Component, OnInit } from '@angular/core';
import { IContactData } from '../../../contact-options/src/public-api';
import { IIndividualImpressumData } from '../../../impressum/src/public-api';
import { IDPSData } from '../../../dps/src/public-api';
import { INavbarData } from '../../../navbar/src/public-api';
import { Router } from '@angular/router';
import { ITypeAheadConfig } from '../../../selection-typeahead/src/lib/selection-typeahead.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public navBarData: INavbarData = this.getNavBarData();
  public individualImpressumData: IIndividualImpressumData = this.getImpressumData();
  public contactOptions: IContactData[] = this.getContactData();
  public individualDPSData: IDPSData = this.getDPSData();
  public items: string[] = this.getItems();
  public placeholder = 'Wonach suchen Sie?';
  public ngStyle = this.getStyling();
  public typeAheadConfig: ITypeAheadConfig = this.getTypeAheadConfig();

  public constructor(private router: Router) {}

  public onClickMenuEntry(target: string) {
    this.router.navigateByUrl(target);
  }

  public getTypeAheadConfig(): ITypeAheadConfig {
    return {
      debounceTimeInMilliSeconds: 200,
      showAfterXLetters: 1,
      maxAmountOfDisplayedItems: 10
    };
  }

  public onSetValue(value: string) {
    alert(value);
  }

  public getStyling(): any {
    // whatever your style is ... :)
    return {
      'background-color': 'white',
      'min-height': '3vh',
      'min-width': '70%',
      'text-align': 'center',
      'margin-top': '20px',
      color: 'black'
    };
  }

  public getItems(): string[] {
    // whatever your items are ... :)
    const models: string[] = [];
    models.push('Alpha');
    models.push('Porsche');
    models.push('Tesla');
    return models;
  }

  public ngOnInit() {

  }

  private getNavBarData(): INavbarData {
    return {
      logoURL: 'http://localhost:3000/api/app/app-images/logo.png',
      appTitle: 'App Title',
      menuEntries: [{
        isActive: true,
        text: 'do this',
        href: '/doThis',
      },
      {
        isActive: false,
        text: 'do that',
        href: '/doThat',
      },
      {
        isActive: false,
        text: 'do it',
        href: '/doIt',
      }]
    };
  }

  private getContactData(): IContactData[] {
    const contactData: IContactData[] = [];
    contactData.push({
      hyperLink: 'https://www.facebook.com/michael.spengler.5686',
      iconClass: 'fa fa-facebook-official fa-3x',
      padding: '0'
    });

    contactData.push({
      hyperLink: 'https://chat.whatsapp.com/FNVd44Xn6TfGgzTf6PE2S0',
      iconClass: 'fa fa-whatsapp fa-3x',
      padding: '1.7'
    });

    contactData.push({
      hyperLink: 'https://t.me/joinchat/CocyExVjtoAZARi6HCtmZA',
      iconClass: 'fa fa-telegram fa-3x',
      padding: '1.7'
    });

    contactData.push({
      hyperLink: 'mailto:info@dance-planner.de',
      iconClass: 'fa fa-envelope-o fa-3x',
      padding: '1.7'
    });

    return contactData;
  }

  private getDPSData(): IDPSData {
    return {
      textAlign: 'center',
      bgColor: 'inherit'
    };
  }

  private getImpressumData(): IIndividualImpressumData {
    return {
      name: 'Michael Spengler',
      street: 'Zollhofgarten 8',
      extension: 'Wohnung 401',
      zipCode: '69115',
      city: 'Heidelberg',
      phoneNumber: '0049 67 83 38 69',
      eMail: 'michael@fancy-cars.org',
      textAlign: 'center',
      bgColor: 'inherit',
    };
  }

}
