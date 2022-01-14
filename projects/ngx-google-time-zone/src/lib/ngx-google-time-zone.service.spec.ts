import { TestBed } from '@angular/core/testing';

import { NgxGoogleTimeZoneService } from './ngx-google-time-zone.service';

describe('NgxGoogleTimeZoneService', () => {
  let service: NgxGoogleTimeZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGoogleTimeZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
