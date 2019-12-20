import { Component } from '@angular/core';
import { IImageLinkWithDetailsLink, IStylingData } from '../../../images-grid/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-images-grid';

  public stylingData: IStylingData = {
    bgColor: 'black',
    imageMaxWith: '10px',
    imageMargin: '10px',
    imageBackgroundColor: 'rgb(93,188, 210)',
    innerFrameColor: 'rgb(213,54,84)',
    outerFrameMargin: '3px',
    outerFramePadding: '1px',
    outerFrameColor: 'rgb(93,188, 210)',
    innerFramePadding: '1px',
    innerFrameMargin: '0px',
    justifyContent: 'center'
  };

  public imagesWithLinks: IImageLinkWithDetailsLink[] = [
    {
      imageLink: '',
      detailsLink: ''
    }
  ];

}
