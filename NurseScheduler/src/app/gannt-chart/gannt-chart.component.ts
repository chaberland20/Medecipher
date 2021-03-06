import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NurseSched, NurseScheduleService } from '../nurse-schedule.service';

@Component({
  selector: 'app-gannt-chart',
  templateUrl: './gannt-chart.component.html',
  styleUrls: ['./gannt-chart.component.css']
})

export class GanntChartComponent implements OnInit {
  // an array of available nurse types
  types= [
    { type: 'CRN' },
    { type:'DDRN'},
    { type: 'EDRN' }
    ]
  schedule: NurseSched[] = []
  shiftArray: NurseSched[] = []
  startsArray: Number[] = []
  
  // return type of nurse based on id
  checkType (id: string) {
    if(id.search("CRN") != -1) return "CRN"
    else if(id.search("DDRN") != -1) return "DDRN"
    else if(id.search("EDRN") != -1) return "EDRN"  // all nurse ids contain 'EDRN', so put this if statement last
    else return "N/A"

  }
  
  //triggers when the date is changed
  @Input() childMessage: any | undefined;
  ngOnChanges(changes: any){
    this.ngOnInit()
  }

  // function to retrun color associated with nursetype to appropriately color the shifts added
  getColor(nurseType: string) { (2)
    switch (nurseType) {
      case "CRN":
        return '#132536';
      case "DDRN":
        return '#361325';
      case "EDRN":
        return '#133633';
      default:
        return 'purple';
    }
  }

  
  // function that takes the string start time and return a number that represents a start location to show shift on gannt-chart
  getShiftStart(nurseShift: string){
    var start = nurseShift.substring(0, 4)
    switch (start){
      case "0700":
        return 1;
      case "0800":
        return 2;
      case "0900":
        return 3;
      case "1000":
        return 4;
      case "1100":
        return 5;
      case "1200":
        return 6;
      case "1300":
        return 7;
      case "1400":
        return 8;
      case "1500":
        return 9;
      case "1600":
        return 10;
      case "1700":
        return 11;
      case "1800":
        return 12;
      case "1900":
        return 13;
      case "2000":
        return 14;
      case "2100":
        return 15;
      case "2200":
        return 16;
      case "2300":
        return 17;
      case "0000":
        return 18;
      case "0100":
        return 19;
      case "0200":
        return 20;
      case "0300":
        return 21;
      case "0400":
        return 22;
      case "0500":
        return 23;
      case "0600":
        return 24;
      default:
        return 0;
    }
  }


  // function that takes in a nurese shift string and gives a range an dlocation for teh shift on the gannt-chart
  styleShift(nurseShift: string){
    var start: number = this.getShiftStart(nurseShift)
    var length: number = Number(nurseShift.substring(5,7)) 
    var end = start + length
    return String(start) + '/' + String(end)
  }


  constructor(private http: HttpClient) {
  }

  //triggered when page is started up and when the date is changed on the calendar component
  ngOnInit(){
    // build array of starting locations for shift
    for (let i: number = 1; i < 25; i++) {
      this.startsArray[i] = i;
    }
    console.log(this.startsArray)
    let sched = new NurseScheduleService(this.http) //instantiate a schedule service
    let string_date = (this.childMessage.getMonth()+1)+'/'+this.childMessage.getDate()+'/2020'; // because csv schedule is from 2020, and not current year of 2021
    if (this.childMessage.getDate() >= 14 || this.childMessage.getMonth() > 10){   // because we don't have the csv for anything past Nov. 14th, 2020 so hard code all days past Nov. 14th to displays Nov. 14th's schedule
      string_date = ('11/14/2020')
    }
    this.schedule = sched.getSched(string_date) // get sched reads dat from schedule service and populates a schedule array for specific data
    // array of shifts
    for (let index = 1; index < sched.userArray.length-1; index++){
      let row = sched.userArray[index]
      this.shiftArray.push(row)
    }

  }
} 