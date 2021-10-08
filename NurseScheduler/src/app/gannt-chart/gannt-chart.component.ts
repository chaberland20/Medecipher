import { Component, OnInit } from '@angular/core';
import { NURSES } from '../mock-staff';
import { Nurse } from '../Nurse';
@Component({
  selector: 'app-gannt-chart',
  templateUrl: './gannt-chart.component.html',
  styleUrls: ['./gannt-chart.component.css']
})
export class GanntChartComponent implements OnInit {
  nurses: Nurse[] = NURSES
  
  getColor(nurseType: string) { (2)
    switch (nurseType) {
      case 'RN':
        return '#0080FF';
      case 'CNA':
        return '#73C2FB';
      case 'CN':
        return '#0E4D92';
      default:
        return 'purple';
    }
  }
  getShiftLength(nurseShift: Array<number>){
    return nurseShift
  }
  constructor() { }
  ngOnInit(): void {
  }
}