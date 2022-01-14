import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { GOOGLE_TIME_ZONE_CONFIG, GoogleTimeZoneConfig } from './ngx-google-time-zone.model';
import { NgxGoogleTimeZoneService } from './ngx-google-time-zone.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
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
