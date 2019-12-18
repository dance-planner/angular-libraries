# Navbar

## Usage
**Add the following in your html**  
```
<lib-navbar [navBarData]="navBarData" (clickMenuEntry)="onClickMenuEntry($event)"></lib-navbar>
```

**Add the following in your ...component.ts**  
```
  public navBarData: INavbarData = this.getNavBarData();

  private getNavBarData(): INavbarData {
    return {
      // replace the following by your data...
      logoURL: 'https://fance-stiftung.de/api/app/app-images/logo.png',
      appTitle: 'App Title',
      menuEntries: [{
        isActive: true,
        text: 'Menu Entry 1',
        href: '/menuEntry1',
      },
      {
        isActive: false,
        text: 'Menu Entry 2',
        href: '/menuEntry2',
      },
      {
        isActive: false,
        text: 'Menu Entry 3',
        href: '/menuEntry3',
      }]
    };
  }

  public onClickMenuEntry(target: string) {
    alert(target);
  }
```

**Add the following in your app.module.ts**  
```
  import { NavbarModule } from 'ng-responsive-navbar';
  
  imports: [
    NavbarModule,
```

To use the full screen make sure your body style="margin: 0;"
