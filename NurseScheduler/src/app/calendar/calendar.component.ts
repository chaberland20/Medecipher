import {Component, Output, EventEmitter} from '@angular/core';
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

  onChange(args: any): any{
    this.today = args.value;
    this.item = args.value;
    this.messageEvent.emit(this.item)
  }
  item = this.today;
  @Output() messageEvent = new EventEmitter<any>();
}
