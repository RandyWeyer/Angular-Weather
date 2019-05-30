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
  Countries: any;
  States: any;
  tempIndex: any;
  tempIndex2: any;
  tempStates: any;
  tempCities: any;

  storeIndex() {
    const i = (document.getElementById('firstDropDown') as HTMLInputElement).value;
    this.tempIndex = i;

    const statesArray = Object.keys(this.Countries[i].states);

    this.tempStates = statesArray;
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

    for (const x in res[j]) {
      if (res[x].hasOwnProperty(x)) {
        res2.push(res[j][x]);
      }
    }
    this.tempCities = res2;
  }


  ngOnInit() {
    this.httpService.get('../../assets/countries+states+cities.json').subscribe(
      data => {
        this.Countries = data;
        console.log(this.Countries[0].states);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );


  }

}
