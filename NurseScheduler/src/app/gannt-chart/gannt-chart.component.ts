import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NURSES } from '../mock-staff';
import { Nurse } from '../Nurse';
import { Type } from '../Type';
import { TYPES } from '../mock-staff';
import { CalendarComponent } from '../calendar/calendar.component';
import { NurseSched, NurseScheduleService } from '../nurse-schedule.service';

@Component({
  selector: 'app-gannt-chart',
  templateUrl: './gannt-chart.component.html',
  styleUrls: ['./gannt-chart.component.css']
})
export class GanntChartComponent implements OnInit {
  nurses: Nurse[] = NURSES
  types: Type[] = TYPES
  schedule: NurseSched[] = []
  
 

  
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

  constructor(private http: HttpClient) {}

  ngOnInit(){
    // let sched = new NurseScheduleService(this.http)
    // for (let index = 1; index < sched.userArray.length-1; index++){
    //   let row = sched.userArray[index]
    //   console.log('index')
    // }
  }
}