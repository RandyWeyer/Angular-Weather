import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-weather',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.css']
})

export class HtmlToPdfComponent implements OnInit {
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

  public captureScreen() {
    const data = document.getElementById('html-table');
    (window as any).html2canvas = html2canvas;
    const doc = new jsPDF(
      'p', 'pt', 'a4'
    );
    doc.html(data, {
      callback(pdf) {
        pdf.save('cv-a4.pdf');
      }
    });
  }
}
