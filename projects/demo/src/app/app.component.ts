import { Component } from '@angular/core';
import { NgxGoogleTimeZoneService } from "../../../ngx-google-time-zone/src/lib/ngx-google-time-zone.service";
import { TimeZoneResponse } from "../../../ngx-google-time-zone/src/lib/ngx-google-time-zone.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";

interface City {
  name: string,
  lat: number,
  lng: number
}

const CITIES: City[] = [
  {
    "name": "Prague",
    "lat": 50.08804,
    "lng": 14.42076
  },
  {
    "name": "London",
    "lat": 51.509865,
    "lng": -0.118092
  },
  {
    "name": "Tokyo",
    "lat": 35.652832,
    "lng": 139.839478
  },
  {
    "name": "New York",
    "lat": 40.730610,
    "lng": -73.935242
  },
  {
    "name": "Moscow",
    "lat": 55.754093,
    "lng": 37.620407
  },
  {
    "name": "Sydney",
    "lat": -33.852222,
    "lng": 151.210556
  },
  {
    "name": "Rio de Janeiro",
    "lat": -22.970722,
    "lng": -43.182365
  },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
    NgxGoogleTimeZoneService
  ]
})
export class AppComponent {

  form!: FormGroup;
  response?: TimeZoneResponse;
  cities: City[] = CITIES;

  constructor(
    fb: FormBuilder,
    private _tzService: NgxGoogleTimeZoneService
  ) {
    this.form = fb.group({
      'apiKey': ['', Validators.required],
      'city': [null],
      'lat': [null, Validators.required],
      'lng': [null, Validators.required]
    })
  }

  getTimeZone() {

    if (this.form.invalid) {
      alert('Please check form!');
      return;
    }

    this._tzService.getTimeZone(this.form.value).subscribe(
      resp => {
        this.response = resp;
      },
      resp => {
        this.response = resp.error;
      }
    )
  }

  getCityName(o: City) {
    return o?.name;
  }

  citySelected(e: MatSelectChange) {
    this.form.patchValue({
      lat: e.value.lat,
      lng: e.value.lng
    });
  }

}
