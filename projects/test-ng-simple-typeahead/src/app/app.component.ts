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
    'Bachata',
    'Salsa',
    'Merengue'
  ];

  public onItemSelected($event) {
    this.selectedItem = $event;
    alert(this.selectedItem);
  }

}
