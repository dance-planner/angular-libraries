# Impressum

## Usage
**Add the following in your html**  
```
<lib-impressum [individualImpressumData]="individualImpressumData"></lib-impressum>
```

**Add the following instance attribute in your ...component.ts**  
```
  public individualImpressumData: IIndividualImpressumData = {
    name: 'your name...',
    street: 'your street...',
    extension: '...',
    zipCode: '...',
    city: '...',
    phoneNumber: '...',
    eMail: '...',
    textAlign: '...',
    bgColor: '...',
  };
```

**Add the following in your app.module.ts**  
```
  imports: [
    ImpressumModule,
```
