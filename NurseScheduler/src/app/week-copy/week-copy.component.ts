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

  @Input('childMessage') today: any | undefined; /* date gets passed from calendar to app to sidebar to here */

  /* Takes calendar selected date and finds previous Sunday */
  getMonday() {
    var weekOf: Date = new Date();
    weekOf.setDate(this.today.getDate() - (this.today.getDate() + 7) % 7);
    return weekOf;
  }

  value = null;
  onEnter(value: any) { this.value = value; }
}
