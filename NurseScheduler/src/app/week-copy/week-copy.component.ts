import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-week-copy',
  templateUrl: './week-copy.component.html',
  styleUrls: ['./week-copy.component.css']
})

export class WeekCopyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  /* today = selected date */
  @Input('childMessage') today: any | undefined; /* date gets passed from calendar to app to sidebar to here */

  /* Takes calendar selected date and finds previous Sunday */
  getSunday() {
    var weekOf: Date = new Date(this.today);
    weekOf.setDate((this.today.getDate() - this.today.getDay()));
    return weekOf;
  }

  value = null;
  onEnter(value: any) { this.value = value; }
}
