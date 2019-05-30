import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GeocodeService } from './geocode.service';
import { Location } from './location-model';

@Component({
  selector: 'app-nested-dropdowns',
  styles: ['agm-map { height: 300px; /* height is required */ }'],
  templateUrl: './nested-dropdowns.component.html',
  styleUrls: ['./nested-dropdowns.component.css']
})
export class NestedDropdownsComponent implements OnInit {
  mapType = 'satellite';
  address = 'Redmond';
  location: Location;
  loading: boolean;

  constructor(
    private httpService: HttpClient,
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef) { }
  Countries: any;
  States: any;
  statesArray: any;
  tempCountry: any;
  tempIndex: any;
  tempIndex2: any;
  tempStates: any;
  tempCities: any;



  ngOnInit() {
    this.httpService.get('../../assets/countries+states+cities.json').subscribe(
      data => {
        this.Countries = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
  }

  storeIndex() {
    const i = (document.getElementById('firstDropDown') as HTMLInputElement).value;
    this.tempIndex = i;

    if (!this.isEmpty(this.Countries[i].states)) {
      this.statesArray = Object.keys(this.Countries[i].states);
    } else {
      this.statesArray = [];
    }
    this.tempCountry = this.Countries[i];
    this.tempStates = this.statesArray;

    this.storeIndex2();
  }

  storeIndex2() {
    const i = (document.getElementById('firstDropDown') as HTMLInputElement).value;
    const j = (document.getElementById('secondDropDown') as HTMLInputElement).value;
    this.tempIndex = i;

    const res = [];
    const res2 = [];
    for (const x in this.Countries[i].states) {
      if (this.Countries[i].states.hasOwnProperty(x)) {
        res.push(this.Countries[i].states[x]);
      }
    }
    if (res === undefined) {
      res.push(' ');
    }
    for (const x in res[j]) {
      if (true) {
        res2.push(res[j][x]);
      }
    }
    if (res2 === undefined) {
      res2.push(' ');
    }
    this.tempCities = res2;
  }

  showLocation() {
    const k = (document.getElementById('thirdDropDown') as HTMLInputElement).value;
    this.addressToCoordinates(k);
  }

  addressToCoordinates(address) {
    this.loading = true;
    console.log(this.geocodeService);
    this.geocodeService.geocodeAddress(address)
      .subscribe((location: Location) => {
        this.location = location;
        this.loading = false;
        this.ref.detectChanges();
      });
  }

}
