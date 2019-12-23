# Typeahead

## Usage
**Execute the following command**
```ng add ngx-bootstrap  --component typeahead```


**Add the following in your html**  
```
<lib-ng-simple-typeahead [placeHolder]="placeHolder" [items]="dances" [inputStyle]="inputStyle" (itemSelected)="onItemSelected($event)"></lib-ng-simple-typeahead>
```

**Add the following in your ...component.ts**  
```
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

```

**Add the following in your app.module.ts**  
```
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppComponent } from './app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { NgSimpleTypeaheadModule } from 'ng-simple-typeahead';

  imports: [
    NgSimpleTypeaheadModule,
    BrowserModule,
    BrowserAnimationsModule
```


