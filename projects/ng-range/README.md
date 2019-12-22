# Questions And Answers

## Usage
**Add the following in your html**  
```
<lib-ng-range (setValue)="handleRangeSetting($event)" [cityName]=cityName [currentRange]="currentRange" [maximumRange]="maximumRange" [minimumRange]="minimumRange"></lib-ng-range>
```

**Add the following in your ...component.ts**  
```
  public cityName = 'Heidelberg';
  public  minimumRange = 10;
  public  maximumRange = 100;
  public  currentRange = 20;

  public handleRangeSetting($event) {
    this.currentRange = $event;
    alert(this.currentRange);
  }
```

**Add the following in your app.module.ts**  
```
  import { NgRangeModule } from 'ng-range';

  imports: [
    NgRangeModule,
```
