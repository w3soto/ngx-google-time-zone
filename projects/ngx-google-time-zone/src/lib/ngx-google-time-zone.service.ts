import { Inject, Injectable, Optional } from "@angular/core";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
  GOOGLE_TIME_ZONE_CONFIG,
  GoogleTimeZoneConfig,
  TimeZoneRequest,
  TimeZoneResponse
} from "./ngx-google-time-zone.model";


/**
 * @See https://developers.google.com/maps/documentation/timezone/overview
 */
@Injectable()
export class NgxGoogleTimeZoneService {

  private readonly _httpClient: HttpClient;

  private readonly _BASE_URL = 'https://maps.googleapis.com/maps/api/timezone/json';

  constructor(
    handler: HttpBackend,
    @Optional() @Inject(GOOGLE_TIME_ZONE_CONFIG) private _tzApiConfig: GoogleTimeZoneConfig,
  ) {
    // create new clean http client and bypass any application's interceptors
    this._httpClient = new HttpClient(handler);
  }

  getTimeZone(tzRequest: TimeZoneRequest): Observable<TimeZoneResponse> {
    const url = this.buildUrl(tzRequest);
    return this._httpClient.get<TimeZoneResponse>(url);
  }

  private buildUrl(tzRequest: TimeZoneRequest): string {
    const params = {
      timestamp: Math.floor(Date.now() / 1000),
      apiKey: this._tzApiConfig?.apiKey,
      ...tzRequest
    };

    const url = new URL(this._BASE_URL);
    url.searchParams.append('location', '' + params.lat + ',' + params.lng);
    url.searchParams.append('timestamp', '' + params.timestamp);
    if (params.language) {
      url.searchParams.append('language', params.language);
    }
    url.searchParams.append('key', params.apiKey);
    return url.href;
  }

}
