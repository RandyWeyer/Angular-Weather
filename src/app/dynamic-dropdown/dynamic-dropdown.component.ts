import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-dropdown',
  templateUrl: './dynamic-dropdown.component.html',
  styleUrls: ['./dynamic-dropdown.component.css']
})
export class DynamicDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public moveRight() {
    $('.right-menu').append($('.left-menu option:selected'));
    $('.left-menu option:selected').remove();
    this.notifyUser();
  }
  public moveLeft() {
    $('.left-menu').append($('.right-menu option:selected'));
    $('.right-menu option:selected').remove();
    this.notifyUser();
  }
  public notifyUser() {
    $('.notify-user').css('display', 'block').fadeIn(400);
    $('.notify-user').delay(2400).fadeOut(400);
  }
}
