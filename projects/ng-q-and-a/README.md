# Questions And Answers

## Usage
**Add the following in your html**  
```
<lib-ng-q-and-a [persistencyURLForGetRequest]="persistencyURLForGetRequest"
                [persistencyURLForAddRequest]="persistencyURLForAddRequest"
                [persistencyURLForUpdateRequest]="persistencyURLForUpdateRequest">
</lib-ng-q-and-a>
```

**Add the following in your ...component.ts**  
```
  public backendBaseURL = 'http://localhost:3000';
  public persistencyURLForGetRequest = `${this.backendBaseURL}/getAsset`;
  public persistencyURLForAddRequest = `${this.backendBaseURL}/addAsset`;
  public persistencyURLForUpdateRequest = `${this.backendBaseURL}/updateAsset/asset`;

```

**Add the following in your app.module.ts**  
```
  import { NgQAndAModule } from 'ng-q-and-a';

  imports: [
    NgQAndAModule,
```
