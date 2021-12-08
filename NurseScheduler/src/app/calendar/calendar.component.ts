import {Component, Output, EventEmitter} from '@angular/core';
 
@Component ({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
 
export class CalendarComponent {
  public today: Date = new Date ();
  public currentMonth: number = this.today.getMonth();
  public currentYear: number = this.today.getFullYear();
  constructor() { 
  }

  //disable the calendar if user tries to go back or forward from the current month
  disabledDate(args: any): void {
    if (args.date.getMonth() != this.currentMonth || args.date.getFullYear() != this.currentYear){
        args.isDisabled = true;
    }
  }

  //triggers anytime the user selects a new date on the calendar
  onChange(args: any): any{
    this.today = args.value;
    this.item = args.value;
    this.messageEvent.emit(this.item)
  }

  //decorator to send the new selected date to other components
  item = this.today;
  @Output() messageEvent = new EventEmitter<any>();
}
