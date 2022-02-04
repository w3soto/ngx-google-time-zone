import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { GOOGLE_TIME_ZONE_CONFIG, GoogleTimeZoneConfig } from './ngx-google-time-zone.model';
import { NgxGoogleTimeZoneService } from './ngx-google-time-zone.service';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ]
})
export class NgxGoogleTimeZoneModule {

  static forRoot(config: GoogleTimeZoneConfig): ModuleWithProviders<NgxGoogleTimeZoneModule> {
    return {
      ngModule: NgxGoogleTimeZoneModule,
      providers: [
        {provide: GOOGLE_TIME_ZONE_CONFIG, useValue: config},
        NgxGoogleTimeZoneService
      ]
    }
  }

}
