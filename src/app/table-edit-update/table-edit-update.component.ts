import { Component, OnInit } from '@angular/core';
import { ApixuService } from '../apixu.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-table-edit-update',
  templateUrl: './table-edit-update.component.html',
  styleUrls: ['./table-edit-update.component.css']
})
export class TableEditUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public notifyUser() {
    $('.success').show();
  }
}
