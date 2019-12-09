# ImagesGrid

## Usage

**In your HTML add:**
```
<lib-images-grid [stylingData]="stylingData" [imagesWithLinks]="imagesWithLinks"></lib-images-grid>
```

**In your component.ts add e.g.:**
```
  public stylingData: IStylingData = {
    bgColor: 'black',
    imageMaxWith: '10px',
    imageMargin: '10px',
    imageBackgroundColor: 'rgb(93,188, 210)',
    innerFrameColor: 'rgb(213,54,84)',
    outerFrameMargin: '3px',
    outerFramePadding: '1px',
    outerFrameColor: 'rgb(93,188, 210)',
    innerFramePadding: '1px',
    innerFrameMargin: '0px',
    justifyContent: 'center'
  };

  public imagesWithLinks: IImageLinkWithDetailsLink[] = [
    {
      imageLink: '',
      detailsLink: ''
    }
  ];
```

**In your app.module.ts add:**  
```
  imports: [
    ImagesGridModule,
```
