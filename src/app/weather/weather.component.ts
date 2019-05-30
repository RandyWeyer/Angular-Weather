import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
    ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;

      // Default export is a4 paper, portrait, using milimeters for units
      const doc = new jsPDF();

      // doc.text('Hello world!', 10, 10);
      // doc.save('a4.pdf');

      doc.text(`
      Current weather conditions: ${this.weatherData.current.condition.text}.

        Temperature in Degrees Celsius: ${this.weatherData.current.temp_c}

        Temperature in Degrees Farenheit: ${this.weatherData.current.temp_f}

        Feels like in Degrees Celsius: ${this.weatherData.current.feelslike_c}

        Feels like in Degrees Farenheit: ${this.weatherData.current.feelslike_f}

        Location Searched: ${this.weatherData.location.name}, ${this.weatherData.location.country}.
      `, 1, 1);
      doc.save('Weather.pdf');

      console.log(this.weatherData);
    });
  }
}
