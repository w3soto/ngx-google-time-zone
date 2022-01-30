import { TestBed } from '@angular/core/testing';
import { HttpBackend, HttpResponse } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from "rxjs";


import { NgxGoogleTimeZoneService } from "./ngx-google-time-zone.service";
import { GOOGLE_TIME_ZONE_CONFIG } from "./ngx-google-time-zone.model";


describe('NgxGoogleTimeZoneService', () => {

  let spyHttpBackend: any;
  let httpTestingController: HttpTestingController;
  let service: NgxGoogleTimeZoneService;

  const TEST_URL = 'https://maps.googleapis.com/maps/api/timezone/json?location=1.2345%2C6.789&timestamp=1234567890&language=en&key=any';

  const TEST_REQUEST = {
    lat: 1.2345,
    lng: 6.7890,
    timestamp: 1234567890,
    language: 'en'
  };

  const TEST_RESPONSE = {
    dstOffset: 1,
    rawOffset: 2,
    status: 'OK',
    timeZoneId: 'id',
    timeZoneName: 'time/zone',
  };

  beforeEach(() => {

    spyHttpBackend = jasmine.createSpyObj('HttpBackend', ['handle']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpTestingController,
        {provide: HttpBackend, useValue: spyHttpBackend},
        {provide: GOOGLE_TIME_ZONE_CONFIG, useValue: {apiKey: 'any'}},
        {provide: NgxGoogleTimeZoneService, useClass: NgxGoogleTimeZoneService},
      ]
    });
    service = TestBed.inject(NgxGoogleTimeZoneService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build valid url', () => {
    // @ts-ignore
    const url = service.buildUrl(TEST_REQUEST);
    expect(url).toEqual(TEST_URL);
  });

  it('should build valid url with custom api-key', () => {
    // @ts-ignore
    const url = service.buildUrl({...TEST_REQUEST, apiKey: 'custom'});
    expect(url).toEqual(TEST_URL.replace('key=any', 'key=custom'));
  });

  it('should return timezone response', () => {
    spyHttpBackend.handle.and.returnValue(
      of(new HttpResponse({
        body: TEST_RESPONSE,
        status: 200,
        statusText: 'OK'
      }))
    );
    service.getTimeZone(TEST_REQUEST)
      .subscribe(resp => {
        // @ts-ignore
        expect(resp).toEqual(TEST_RESPONSE);
      });
    expect(spyHttpBackend.handle).toHaveBeenCalled();
  });

});
