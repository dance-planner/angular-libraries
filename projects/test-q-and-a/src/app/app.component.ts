import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-q-and-a';
  persistencyURLForGetRequest = 'http://localhost:3000/getAsset';
  persistencyURLForPostRequest = 'http://localhost:3000/addAsset';
}
