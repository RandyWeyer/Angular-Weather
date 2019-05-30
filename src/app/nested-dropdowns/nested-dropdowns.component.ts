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

  storeIndex() {
    const i = (document.getElementById('firstDropDown') as HTMLInputElement).value;
    this.tempIndex = i;

    if (!this.isEmpty(this.Countries[i].states)) {
      this.statesArray = Object.keys(this.Countries[i].states);
    } else {
      this.statesArray = [];
    }


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
