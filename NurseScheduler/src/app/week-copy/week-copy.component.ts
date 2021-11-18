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

  @Input() childMessage: any | undefined;

  value = null;
  onEnter(value: any) { this.value = value; }
}
