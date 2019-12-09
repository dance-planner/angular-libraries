# Typeahead

## Usage
1. Add the following in your html  
```
<lib-selection-typeahead [ngStyle]="ngStyle" [items]="models" [placeholder]="placeholder"></lib-selection-typeahead>
```

2. Add the following instance attribute in your ...component.ts  
```
  public items: string[] = this.getItems();
  public placeholder = 'What are you looking for?';
  public ngStyle = this.getStyling();

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

```

3. Add the following in your app.module.ts  
```
  imports: [
    SelectionTypeaheadModule,
```
