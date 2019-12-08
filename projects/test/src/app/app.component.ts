import { Component, OnInit } from '@angular/core';
import { IImageLinkWithDetailsLink } from '../../../images-grid/src/lib/images-grid.interfaces';
import { IContactData } from '../../../contact-options/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  imageLinksWithDetailLinks: IImageLinkWithDetailsLink[] = this.getData();
  public contactOptions: IContactData[] = [];

  public ngOnInit() {
    this.prepareContactData();
  }

  private prepareContactData() {
    this.contactOptions.push({
      hyperLink: 'https://www.facebook.com/michael.spengler.5686',
      iconClass: 'fa fa-facebook-official fa-3x',
      padding: '0'
    });

    this.contactOptions.push({
      hyperLink: 'https://chat.whatsapp.com/FNVd44Xn6TfGgzTf6PE2S0',
      iconClass: 'fa fa-whatsapp fa-3x',
      padding: '1.7'
    });

    this.contactOptions.push({
      hyperLink: 'https://t.me/joinchat/CocyExVjtoAZARi6HCtmZA',
      iconClass: 'fa fa-telegram fa-3x',
      padding: '1.7'
    });

    this.contactOptions.push({
      hyperLink: 'mailto:info@dance-planner.de',
      iconClass: 'fa fa-envelope-o fa-3x',
      padding: '1.7'
    });

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

}
