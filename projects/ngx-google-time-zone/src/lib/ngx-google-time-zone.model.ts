import { InjectionToken } from "@angular/core";


export const GOOGLE_TIME_ZONE_CONFIG = new InjectionToken('GOOGLE_TIME_ZONE_CONFIG');

export interface GoogleTimeZoneConfig {
  apiKey: string
}

export interface TimeZoneRequest {
  lat: number,
  lng: number,
  timestamp?: number, // in seconds
  language?: string,
  apiKey?: string // if not provided with NgxGoogleTimeZoneModule.forRoot(...)
}

export interface TimeZoneResponse {
  dstOffset: number,
  rawOffset: number,
  status: TimeZoneStatus,
  timeZoneId: string,
  timeZoneName: string,
}

export type TimeZoneStatus = 'OK' | 'ZERO_RESULTS' | 'OVER_DAILY_LIMIT' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' |
  'INVALID_REQUEST' | 'UNKNOWN_ERROR';

