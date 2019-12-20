import { Component } from '@angular/core';
import { IStylingData } from '../../../../dist/disclaimer/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'test-disclaimer';
  public stylingData: IStylingData = {
    textAlign: '...',
    bgColor: '...'
  };

}
