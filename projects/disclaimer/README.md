# Disclaimer

## Usage
1. Add the following in your html  
```
<lib-disclaimer [stylingData]="stylingData"></lib-disclaimer>
```

2. Add the following instance attribute in your ...component.ts
```
  public stylingData: IStylingData = {
    textAlign: '...',
    bgColor: '...'
  };
```

3. Add the following in your app.module.ts
```
  imports: [
    DisclaimerModule,
```
