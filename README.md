# NgxGoogleTimeZone

Angular service for Google's Time Zone API. 
For more details see [Official Google Time Zone API documentation](https://developers.google.com/maps/documentation/timezone/overview).

[StackBlitz Demo](https://stackblitz.com/edit/angular-ivy-j9hem2)

[GitHub](https://github.com/w3soto/ngx-google-time-zone#readme)

## Installation
```shell
npm -i ngx-google-time-zone
```

## Example

For more details see *projects/demo* application

```typescript
import { NgxGoogleTimeZoneModule } from "ngx-google-time-zone";
...

@NgModule({
  imports: [
    ...,
    NgxGoogleTimeZoneModule.forRoot({
      apiKey: '---GOOGLE-API-KEY---'
    }),
  ],
  ...
})
class AppModule { ... }

```

Usage
```typescript
import { NgxGoogleTimeZoneService } from "ngx-google-time-zone";

@Component({
  ...
})
class AppComponent { 
  
  constructor(
    private _gtz: NgxGoogleTimeZoneService
  ) {}
  
  getTimeZone() {
    this._gtz.getTimeZone({
      lat: 48.743551, 
      lng: 18.914176
    }).subscribe(resp => console.log('TimeZoneResponse:', resp));
  }
  
}
```

## Services

* **NgxGoogleTimeZoneService**

```typescript
getTimeZone(tzReq: TimeZoneRequest): Observable<TimeZoneResponse>
```

## Interfaces

* **TimeZoneRequest**
```typescript
export interface TimeZoneRequest {
  lat: number,
  lng: number,
  timestamp?: number, // in seconds
  language?: string,
  apiKey?: string // if not provided with NgxGoogleTimeZoneModule.forRoot(...)
}
```

* **TimeZoneResponse**
```typescript
export interface TimeZoneResponse {
  dstOffset: number,
  rawOffset: number,
  status: TimeZoneStatus,
  timeZoneId: string,
  timeZoneName: string,
}
```

* **TimeZoneStatus**
```typescript
export type TimeZoneStatus = 'OK' | 'ZERO_RESULTS' | 'OVER_DAILY_LIMIT' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' |
  'INVALID_REQUEST' | 'UNKNOWN_ERROR';
```
