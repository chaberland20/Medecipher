import {Component} from '@angular/core';
 
@Component ({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
 
export class CalendarComponent {
  public minDate: Date = new Date (new Date().setFullYear(new Date().getFullYear() - 1));
  public maxDate: Date = new Date (new Date().setFullYear(new Date().getFullYear() + 1));
  public value: Date = new Date ();
  public multiSelect: Boolean = true;
  constructor() { }
}