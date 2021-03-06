import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { Nurse } from './Nurse';

@Injectable({
  providedIn: 'root'
})

export class NurseScheduleService {
  public userArray: NurseSched[] = [];
  shiftArray: NurseSched[] =[]

  constructor(private http: HttpClient) {
    }
    
  // return type of nurse based on id
  checkType (id: string) {
    if(id.search("CRN") != -1) return "CRN"
    else if(id.search("DDRN") != -1) return "DDRN"
    else if(id.search("EDRN") != -1) return "EDRN"  // all nurse ids contain 'EDRN', so put this if statement last
    else return "N/A"
  }

    // returns schedule info as an array
    getSched(date: string): Array<NurseSched> { 
      let sched: Array<NurseSched> = new Array<NurseSched>()
      // read .csv and send schedule
      this.http.get('assets/Nurse_Shifts.csv',
      {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          // read .csv data into array
          for (let index = 0; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.userArray.push(new NurseSched( row[0], row[1], row[2], row[3].trim()));
          }

          this.userArray.forEach((s) => {
            if(!sched.includes(s) && date == s.date){
              sched.push(s)
            }
          })
          
          return sched
      },
        error => {
            console.log(error);
        }
      );      
      // will return empty array if error occurs
      return sched;
    }
  
    // returns list of nurse ids (no duplicates)
    getNurseIds(): string[] {
      let ids: string[] = [];
      // read .csv
      this.http.get('assets/Nurse_Shifts.csv',
      {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          // import .csv data into array
          for (let index = 0; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.userArray.push(new NurseSched( row[0], row[1], row[2], row[3].trim()));
          }
          // extract and return list of ids
          this.userArray.forEach((s) => {
            if(!ids.includes(s.rn_id)) ids.push(s.rn_id)  // makes sure we don't include duplicates
          })
          return ids;
      },
        error => {
            console.log(error);
        }
      );         
      // returns empty list if error
      return ids;
    }

    // returns list of preexisting shifts (no duplicates)
    getShiftTypes(): string[] {
      let shifts: string[] = [];
      // read .csv
      this.http.get('assets/Nurse_Shifts.csv',
      {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          // import .csv data into array
          for (let index = 0; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.userArray.push(new NurseSched( row[0], row[1], row[2], row[3].trim()));
          }
          // extract and return list of shifts
          this.userArray.forEach((s) => {
            // every shift should contain HR; if the shift isn't a duplicate and has HR, add it
            if(!shifts.includes(s.shift_assigned) && s.shift_assigned.search("HR") != -1) shifts.push(s.shift_assigned)
          })
          return shifts;

      },
        error => {
            console.log(error);
        }
      );   
      return shifts;
    }

    // orders list of shifts by duration and start time
    organizeShifts(shifts: string[]) {
      var data: shiftData[] = [];
      var sortedShifts: string[] = [];
      // extract duration and start time
      shifts.forEach((s) => {      
        var startTime = +s.substring(0, 4)
        var duration = +s.substring(5, 7) 
        var shift = new shiftData(startTime, duration)
        data.push(shift);
      })
      // sort by duration, then by start time
      data = data.sort((a, b) => ( (a.duration < b.duration) || (a.duration == b.duration && a.startTime < b.startTime) ? -1 : 1))

      data.forEach((d) => {
        sortedShifts.push(d.startTime + " " + d.duration + "hr")
      })
      return sortedShifts;
    }

    // returns the current schedule run
    getCurrentRun() {
      let run: string = "";

      // read .csv
      this.http.get('assets/Nurse_Shifts.csv',
      {responseType: 'text'})
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");

          // import .csv data into array
          for (let index = 0; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.userArray.push(new NurseSched( row[0], row[1], row[2], row[3].trim()));
          }

          // get run_id from first nurse object, index 1 to ignore .csv header row
          run = this.userArray[1].run_id
          return run
      },
        error => {
            console.log(error);
        }
      );   

      return run;
    }
  }

  //defines individual shift objects
  export class NurseSched{
    run_id: string;
    date: string;
    rn_id: string;
    shift_assigned: string;
  
    constructor(run_id: string, date: string, rn_id: string, shift_assigned: string){
      this.run_id = run_id;
      this.date = date;
      this.rn_id = rn_id
      this.shift_assigned = shift_assigned;
    }
  }

  export class shiftData{
    startTime: number;
    duration: number;

    constructor(startTime: number, duration: number) {
      this.duration = duration;
      this.startTime = startTime;
    }
  }

