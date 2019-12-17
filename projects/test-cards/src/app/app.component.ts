import { Component } from '@angular/core';
import { ICardData } from '../../../card/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public itemSize = 400;
  public height = 3000;
  public cardStyling: any = this.getCardStyle();
  public cards: ICardData[] = this.getCards();

  public getCardStyle(): any {
    return {
      'text-align': 'center',
      'background-color': 'red',

      color: 'white'
    };
  }

  public getCards(): ICardData[] {
    return [{
      title: 'test title 0',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 0',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 0',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 0',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 0',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 0',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 0',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 0',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 1',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 2',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 3',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'https://fance-stiftung.de/api/app/app-images/logo.png'
    }
    ];
  }

}
