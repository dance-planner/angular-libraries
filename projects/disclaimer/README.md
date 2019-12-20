# Disclaimer

## Usage
**Add the following in your html**  
```
<lib-disclaimer [stylingData]="stylingData"></lib-disclaimer>
```

**Add the following instance attribute in your ...component.ts**  
```
  public stylingData: IStylingData = {
    textAlign: '...',
    bgColor: '...'
  };
```

**Add the following in your app.module.ts**
```
  import { DisclaimerModule } from 'german-legal-disclaimer'

  imports: [
    DisclaimerModule,
```
