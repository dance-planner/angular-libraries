import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cityName = 'Heidelberg';
  public  minimumRange = 10;
  public  maximumRange = 100;
  public  currentRange = 20;

  public handleRangeSetting($event) {
    this.currentRange = $event;
    alert(this.currentRange);
  }
}
