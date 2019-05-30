import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  //Import HttpClient in constructor
  constructor(
    private httpService: HttpClient,
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef) { }
  //Define types of variables for use of countries
  Countries: object;
  States: object;
  statesArray: string[];
  tempIndex: string;
  tempIndex2: string;
  tempStates: string[];
  tempCities: string[];

  //Function for checking empty arrays which returns a boolean
  isEmpty(obj) {
    //For loop for each key, in the object array
    for (const key in obj) {
        // if the object has the defined property return false
      if (obj.hasOwnProperty(key)) {

            return false;
      }
    }
    //If the for loop does not return false, it returns true
    return true;
  }
}
  //Function to store the index position of the countries/first dropdown element
  storeIndex() {
    //Set the constant i, to whatever typecasted value is stored in the Id of 'firstDropDown'
    const i = (document.getElementById('firstDropDown') as HTMLInputElement).value;
    //Set tempIndex to i
    this.tempIndex = i;
    //If theArray of the states of the country and index position i is not empty (Like USA i.e. Washington, Florida...)
    if (!this.isEmpty(this.Countries[i].states)) {
      //set the StatesArray to the value of the selected countries states
      this.statesArray = Object.keys(this.Countries[i].states);
    //If the array is empty (like bahamas which does not have states)
    } else {
      //Set the states array to an empty array, avoiding prior selections or dropdown population errors
      this.statesArray = [];
    }
    this.tempCountry = this.Countries[i];
    //Set tempStates array to the statesArray
    this.tempStates = this.statesArray;
    //Run the function storeIndex 2
    this.storeIndex2();
  }
  //Function to store the index position of the first and second drop down element, to populate the cities/third dropdown
  storeIndex2() {
    //Define const i as the typecast value stored in the id of 'firstDropDown'
    const i = (document.getElementById('firstDropDown') as HTMLInputElement).value;
    //Define const j as the typecast value stored in the id of 'secondDropDown'
    const j = (document.getElementById('secondDropDown') as HTMLInputElement).value;
    //Set the tempIndex to i
    this.tempIndex = i;
    //Define the response array that holds the value of states
    const res = [];
    //Define the response array that holds the value of cities
    const res2 = [];
    //For each index x in the given index position of the selected countries states...
    for (const x in this.Countries[i].states) {
      // If the state has the defined properties of the index of x in the states array,
      if (this.Countries[i].states.hasOwnProperty(x)) {
        //push the index x of the state element into the response array
        res.push(this.Countries[i].states[x]);
      }
    }
    //If the response in undefined...
    if (res === undefined) {
      //push a blank string literal into the response array
      res.push(' ');
    }
    // for each element x in the response array j...
    for (const x in res[j]) {
      //If x is true...
      if (true) {
        //push the response array of index position [j][x] into the second response array
        res2.push(res[j][x]);
      }
    }
    //If the second response array is undefined
    if (res2 === undefined) {
      //push a blank string literal into the second response array
      res2.push(' ');
    }
    //set tempCities array to the second response array
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
  ngOnInit() {
    //Get the json data from the assets directory and returns the countries json data.
    this.httpService.get('../../assets/countries+states+cities.json').subscribe(
      data => {
        this.Countries = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
