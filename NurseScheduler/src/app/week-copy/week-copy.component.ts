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

  @Input('childMessage') weekOf: any | undefined; /* date gets passed from calendar to app to sidebar to here */

  /* Takes calendar selected date and finds previous Monday */
  getMonday() {
      this.weekOf.setDate(this.weekOf.getDate() - (this.weekOf.getDate() + 6) % 7);
      return this.weekOf;
  }

  value = null;
  onEnter(value: any) { this.value = value; }
}
