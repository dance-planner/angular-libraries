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
    imageWith: '20px',
    imagePadding: '0vh',
    frameMargin: '0vh',
    framePadding: '0vh',
    frameBackgroundColor: 'rgb(213,54,84)',
    imageBackgroundColor: 'rgb(93,188, 210)',
  };
}
