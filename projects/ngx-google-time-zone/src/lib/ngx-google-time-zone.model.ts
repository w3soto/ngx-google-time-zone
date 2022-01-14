import { InjectionToken } from "@angular/core";


export const GOOGLE_TIME_ZONE_CONFIG = new InjectionToken('GOOGLE_TIME_ZONE_CONFIG');

export interface GoogleTimeZoneConfig {
  apiKey: string
}

export interface TimezoneRequest {
  lat: number,
  lng: number,
  timestamp?: number, // in seconds
  language?: string
}

export interface TimezoneResponse {
  dstOffset: number,
  rawOffset: number,
  status: TimeZoneStatus,
  timeZoneId: string,
  timeZoneName: string,
}

export type TimeZoneStatus = 'OK' | 'ZERO_RESULTS' | 'OVER_DAILY_LIMIT' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' |
  'INVALID_REQUEST' | 'UNKNOWN_ERROR';

