import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public placeHolder = 'Start Typing ...';

  public selectedItem = 'Bachata';

  public dances: string[] = [
    'Bachata |fance#< http://localhost:3001/getFlag/countryCode/DE',
    'Salsa',
    'Merengue'
  ];

  public useCustomTemplate = true;
  public inputStyle = {
    width: '100%',
    'font-size': '18px',
    'min-height': '3em',
    'background-color': '#000',
    'text-align': 'center',
    color: 'rgb(213,54,84)',
  };

  public onItemSelected($event) {
    this.selectedItem = $event;
  }

 }

