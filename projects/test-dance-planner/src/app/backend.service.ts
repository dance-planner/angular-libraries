import { Injectable } from '@angular/core';
import { ICardData } from '../../../card/src/public-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';

export interface IEvent {
  id: string;
  dance: string;
  country: string;
  location: string;
  date: string;
  posterURL: string;
  link: string;
  title: string;
  comments: string;
  createdFromLatitude: number;
  createdFromLongitude: number;
  eventLatitude: number;
  eventLongitude: number;
  distance: number;
  reportedBecause: string;
  whatsAppLink: string;
  telegramLink: string;
  supporter: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public static responseList: any[] = [];

  // public static readonly backendURL = 'https://fance-stiftung.de/';
  public static readonly backendURL = 'http://localhost:3000/';

  public constructor(private http: HttpClient) {}


  public getLandingPageData(includeCountries: boolean, country: string, minPop: number): any {
    const eventsUrl = `${BackendService.backendURL}api/events/getFutureEvents`;
    const events = this.get(eventsUrl);

    const dancesUrl = `${BackendService.backendURL}api/dances/getDances`;
    const dances = this.get(dancesUrl);

    let cities;
    if (country === '') {
      console.log('I just load cities with at least 140000 people - necessary to discover the closest fancy city');
      const citiesUrl = `${BackendService.backendURL}api/cities/getAllCities/minPop/140000`;
      cities = this.get(citiesUrl);
    } else {
      console.log(`I load cities from ${country} with at least ${minPop} people`);
      const citiesUrl = `${BackendService.backendURL}api/cities/country/${country}/minPop/${minPop}`;
      cities = this.get(citiesUrl);
    }

    if (includeCountries) {
      const countries = this.get(
        `${BackendService.backendURL}api/countries/getCountries`
      );
      const countriesWithAtLeastOneEvent = this.get(
        `${BackendService.backendURL}api/countries/getCountryNamesWithAtLeastOneEvent`
      );
      return forkJoin([
        events,
        dances,
        cities,
        countries,
        countriesWithAtLeastOneEvent
      ]);
    } else {
      return forkJoin([events, dances, cities]);
    }
  }


  private get(url: any): any {
    console.log(`calling to get ${url}`);
    return this.http.get<any>(url);
  }

  private post(url: string, body: any) {
    // const urlWithClient = `${url}?client=${document.URL}`;
    const urlWithClient = url;
    console.log(`calling to post to ${urlWithClient}`);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    console.log(JSON.stringify(body));
    return this.http.post<any>(urlWithClient, JSON.stringify(body), httpOptions);
  }

}
