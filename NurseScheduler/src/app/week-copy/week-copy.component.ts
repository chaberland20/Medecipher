import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-copy',
  templateUrl: './week-copy.component.html',
  styleUrls: ['./week-copy.component.css']
})
export class WeekCopyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = 0;
  onEnter(value: number) { this.value = value; }
}
