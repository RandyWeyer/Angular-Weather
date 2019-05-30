import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  arrCase: object[];
  Books: any;

  ngOnInit() {
    this.httpService.get('../../assets/books.json').subscribe(
      data => {
        this.Books = data;
        console.log(data);
        console.log(data[0].author);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

    // Setup - add a text input to each footer cell
    $('#bookTable tfoot th').each(function() {
      const title = $(this).text();
      $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });

    // DataTable
    const table = $('#bookTable').DataTable({
      pagingType: 'full_numbers'
    });

    // Apply the search
    table.columns().every(function() {
      const that = this;

      // $('input').on('keyup change', function() {
      //   console.log(this);
      //   if (that.search() !== this.value) {
      //     that
      //       .search(this.value)
      //       .draw();
      //   }
      // });
    });
  }

}
