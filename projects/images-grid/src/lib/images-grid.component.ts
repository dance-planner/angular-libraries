import { Component, Input } from '@angular/core';
import { IImageLinkWithDetailsLink, IStylingData } from './images-grid.interfaces';

@Component({
  selector: 'lib-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.css']
})
export class ImagesGridComponent {
  @Input() imagesWithLinks: IImageLinkWithDetailsLink[] = [];
  @Input() stylingData: IStylingData = {
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
}
