import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public minDate: Date = new Date (new Date().setFullYear(new Date().getFullYear() - 1));
  public maxDate: Date = new Date (new Date().setFullYear(new Date().getFullYear() + 1));
  public value: Date = new Date ();
  public multiSelect: Boolean = true;
  constructor () {}
}
