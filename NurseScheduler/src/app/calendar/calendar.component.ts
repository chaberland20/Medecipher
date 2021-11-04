import {Component} from '@angular/core';
import { Calendar } from '@syncfusion/ej2-calendars';
 
@Component ({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
 
export class CalendarComponent {
  public today: Date = new Date ();
  public currentMonth: number = this.today.getMonth();
  constructor() { 
  }
  disabledDate(args: any): void {
    if (args.date.getMonth() != this.currentMonth){
        args.isDisabled = true;
    }
  }
}
