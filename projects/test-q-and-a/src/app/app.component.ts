import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public baseURL = 'http://localhost:3000'
  public backendBaseURL = 'http://localhost:3000';
  public persistencyURLForGetRequest = `${this.backendBaseURL}/getAsset`;
  public persistencyURLForAddRequest = `${this.backendBaseURL}/addAsset`;
  public persistencyURLForUpdateRequest = `${this.backendBaseURL}/updateAsset/asset`;
}
