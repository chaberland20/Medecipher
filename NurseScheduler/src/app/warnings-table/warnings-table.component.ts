import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warnings-table',
  templateUrl: './warnings-table.component.html',
  styleUrls: ['./warnings-table.component.css']
})
export class WarningsTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* the hardcoded values for the warnings */
  understaffed: number = 3;
  overstaffed: number = 0;
  nexp: number = 2;
  overworked: number = 0;

  /* returns green if 0, else red (used hex rgb values) */
  getWarningColor(value: number) {
    if (value == 0)
      return '#00ff00';
    else
      return '#ff0000';
  }
}
