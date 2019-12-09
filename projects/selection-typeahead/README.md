# Typeahead

## Usage
**Add the following in your html**  
```
<lib-selection-typeahead [items]="items" [placeholder]="placeholder" [typeAheadConfig]="typeAheadConfig" [ngStyle]="ngStyle" (setValue)="onSetValue($event)"></lib-selection-typeahead>
```

**Add the following instance attribute in your ...component.ts**  
```
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

```

**Add the following in your app.module.ts**  
```
  imports: [
    SelectionTypeaheadModule,
```
