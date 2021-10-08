import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public minDate: Date = new Date (new Date().setFullYear(new Date().getFullYear() - 1));
  public maxDate: Date = new Date (new Date().setFullYear(new Date().getFullYear() + 1));
  public value: Date = new Date ();
  public multiSelect: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
