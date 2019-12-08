import { Component, OnInit } from '@angular/core';
import { IContactData } from '../../../contact-options/src/public-api';
import { IIndividualImpressumData } from '../../../impressum/src/public-api';
import { IDPSData } from '../../../dps/src/public-api';
import { INavbarData } from '../../../navbar/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Fancy Cars';
  public navBarData: INavbarData[] = this.getNavBarData();
  public individualImpressumData: IIndividualImpressumData = this.getImpressumData();
  public contactOptions: IContactData[] = this.getContactData();
  public individualDPSData: IDPSData = this.getDPSData();


  public ngOnInit() {

  }

  private getNavBarData(): any {
    return [{
      cssClass: 'active',
      href: '/',
      text: 'Startseite'
    },
    {
      cssClass: '',
      href: '/models',
      text: 'Modelle'
    },
    {
      cssClass: '',
      href: '/dashboard',
      text: 'Dashboard'
    },
    {
      cssClass: 'right',
      href: '/about',
      text: 'Über Uns'
    }];
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

  private getData() {
    return [
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }, {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-10-09T21:04:13.645Z-Zouk%20Darmstadt%20Level%202.jpeg',
        detailsLink: 'https://dance-planner.de/?eventId=1570655053843'
      },
      {
        imageLink: 'https://fance-stiftung.de/api/events/img/2019-08-05T19:45:46.145Z-TangoFance.jpg',
        detailsLink: 'https://dance-planner.de/?eventId=1565034346498'
      }

    ];
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
