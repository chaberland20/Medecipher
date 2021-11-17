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
    this.http.get('assets/Nurse_Shifts.csv',
    {responseType: 'text'})
    .subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        for (let index = 0; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          this.userArray.push(new NurseSched( row[0], row[1], row[2], row[3].trim()));
        }
    },
      error => {
          console.log(error);
      }
    );
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
            if(date == s.date){
              sched.push(s)
            }

          })
          console.log("sched:",sched)
            return sched
          console.log(sched)
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
            if(!ids.includes(s.rn_id)) ids.push(s.rn_id)
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
    getShifts(): string[] {
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
            // every shift contains HR; so if the shift isn't a duplicate and has HR, add it
            if(!shifts.includes(s.shift_assigned) && s.shift_assigned.search("HR") != -1) shifts.push(s.shift_assigned)
          })
          // organize shifts before returning them
          shifts = this.organizeShifts(shifts);
          console.log("organized:", shifts)
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
  }

  export class NurseSched{
    run_id?: string;
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

