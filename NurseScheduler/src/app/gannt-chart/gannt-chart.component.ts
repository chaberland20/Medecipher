import { Component, OnInit } from '@angular/core';
import { NURSES } from '../mock-staff';
import { Nurse } from '../Nurse';
import { Type } from '../Type';
import { TYPES } from '../mock-staff';
@Component({
  selector: 'app-gannt-chart',
  templateUrl: './gannt-chart.component.html',
  styleUrls: ['./gannt-chart.component.css']
})
export class GanntChartComponent implements OnInit {
  nurses: Nurse[] = NURSES
  types: Type[] = TYPES

  
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
  getType(type: string){
    switch (type){
      case 'RN':
        return 'RN';
      case 'CNA':
        return 'CNA';
      case 'CN':
        return 'CN';
      default:
        return 'purple';

    }
  }
  getShiftLength(nurseShift: Array<number>){
    return nurseShift
  }
  public date: Date = new Date(Date.now());
  constructor() { 
   
   }
  ngOnInit(): void {
  }
}