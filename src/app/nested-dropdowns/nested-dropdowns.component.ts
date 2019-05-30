import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nested-dropdowns',
  templateUrl: './nested-dropdowns.component.html',
  styleUrls: ['./nested-dropdowns.component.css']
})
export class NestedDropdownsComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  arrCase: object[];
  Countries: object;
  States: object;
  statesArray: string[];
  tempIndex: string;
  tempIndex2: string;
  tempStates: string[];
  tempCities: string[];

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
