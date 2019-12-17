# Contact Options

## Usage

**In your HTML add the following:**
```
<lib-cards [cards]="cards" [cardStyling]="cardStyling" [itemSize]="itemSize" [viewPortHeight]="height"></lib-cards>
```

**In your ...component.ts add the following:**
```
  public cards: ICardData[] = this.getCards()
  public cardStyling: any = this.getDefaultStyle();
  public itemSize = 700;
  public viewPortHeight = 3000;

  private getDefaultStyle(): any {
    return {
      'background-color': 'white',
      'max-width': '10px'
    };
  }

  public getCards(): ICardData[] {
    // replace this by your own data
    return [
    {
      title: 'test title 1',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 2',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'some-imageURL'
    },
    {
      title: 'test title 3',
      info: 'test info',
      details: 'test details',
      linkToThisItem: 'a-team-xy',
      linkToFurtherInfo: 'somewhere-else',
      imageURL: 'https://fance-stiftung.de/api/app/app-images/logo.png'
    }
    ];
  }  
```

**In your app.module.ts add the following:**
```
  imports: [
    CardsModule,
```




