import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      'https://api.apixu.com/v1/current.json?key=cff03f9087924a369aa185733192305&q=' + location
    );
  }
}
