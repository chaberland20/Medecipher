import {Component, Input} from '@angular/core';
 
@Component ({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
 
export class CalendarComponent{
  public today: Date = new Date ();
  public currentMonth: number = this.today.getMonth();
  constructor() { }
  disabledDate(args: any): void {
    if (args.date.getMonth() != this.currentMonth)
        args.isDisabled = true;
    }
  onChange(args: any): any{
    console.log(args.value); //this is the date value that is getting updated, need to send it to gant chart
    this.today = args.value;
    this.item = args.value;
  }
  item = this.today;
}
