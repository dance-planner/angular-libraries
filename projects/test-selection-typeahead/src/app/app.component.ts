import { Component } from '@angular/core';
import { ITypeAheadConfig } from '../../../selection-typeahead/src/lib/selection-typeahead.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-selection-typeahead';

  public items: string[] = this.getItems();
  public placeholder = 'What are you looking for?';
  public ngStyle = this.getStyling();
  public typeAheadConfig: ITypeAheadConfig = this.getTypeAheadConfig();

  private getStyling(): any {
    // whatever your style is ... :)
    return {
      'background-color': 'white',
      color: 'black'
    };
  }

  private getItems(): string[] {
    // whatever your items are ... :)
    const models: string[] = [];
    models.push('Alpha');
    models.push('Porsche');
    models.push('Tesla');
    return models;
  }

  private getTypeAheadConfig(): ITypeAheadConfig {
    return {
      debounceTimeInMilliSeconds: 200,
      showAfterXLetters: 1,
      maxAmountOfDisplayedItems: 10
    };
  }

  public onSetValue(value: string) {
    alert(value);
  }

}
