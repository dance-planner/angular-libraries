# Contact Options

## Usage

**In your HTML add the following:**
```
<lib-contact [individualImpressumData]="individualImpressumData" [disclaimerStylingData]="disclaimerStylingData"></lib-contact>
```

**In your ...component.ts add the following:**
```
  @Input() individualImpressumData: any = this.getIndividualImpressumData();
  @Input() disclaimerStylingData: any = this.getDisclaimerStylingData();

  public getDisclaimerStylingData(): any {
    return {
      textAlign: 'center',
      bgColor: 'inherit'
    };
  }
  public getIndividualImpressumData(): any {
    return {
      name: '...',
      street: '...',
      extension: '...',
      zipCode: '69115',
      city: 'Heidelberg',
      phoneNumber: '...',
      eMail: '...',
      textAlign: 'center',
      bgColor: 'inherit'
    };
  }

```

**In your app.module.ts add the following:**
```
  imports: [
    ContactModule,
```




