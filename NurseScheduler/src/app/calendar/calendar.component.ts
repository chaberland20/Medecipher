import {Component} from '@angular/core';
 
@Component ({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
 
export class CalendarComponent {
  public today: Date = new Date ();
  public values: Date [] = [this.today]  
  public multiSelect: Boolean = true;
  constructor() { }
}