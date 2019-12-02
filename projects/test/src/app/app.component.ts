import { Component } from '@angular/core';
import { IImageLinkWithDetailsLink } from '../../../images-grid/src/lib/images-grid.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  imageLinksWithDetailLinks: IImageLinkWithDetailsLink[] = this.getData();
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
