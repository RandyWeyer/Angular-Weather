import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-switch',
  templateUrl: './search-switch.component.html',
  styleUrls: ['./search-switch.component.css']
})
export class SearchSwitchComponent implements OnInit {
  selectedOption: string;
  options = [
    { name: 'date', value: 1 },
    { name: 'int', value: 2 },
    { name: 'text', value: 3 }
  ];
  constructor() { }

  ngOnInit() {
  }

  disallowNumber() {

  }
}
