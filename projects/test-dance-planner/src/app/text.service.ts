import { Injectable } from '@angular/core';

interface IInfo {
  findEvents: string;
  createEvents: string;
  useAsApp: string;
  furtherFunctions: string;
  contact: string;

}

export interface ITexts {
  language: string;
  info: IInfo;
}

const texts: ITexts[] = [
  {
    language: 'en',
    info: {
      findEvents: 'Find Events',
      createEvents: 'Create Events',
      useAsApp: 'The App',
      furtherFunctions: 'Further Functions',
      contact: 'Contact',
    }
  }
];



@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  public getText(language: string) {
    return texts.filter((entry: ITexts) => entry.language === language)[0];
  }
}

