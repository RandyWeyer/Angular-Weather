import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nested-dropdowns',
  templateUrl: './nested-dropdowns.component.html',
  styleUrls: ['./nested-dropdowns.component.css']
})
export class NestedDropdownsComponent implements OnInit {
  //Import HttpClient in constructor
  constructor(private httpService: HttpClient) { }
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
    //states
    const res = [];
    //cities
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

}
