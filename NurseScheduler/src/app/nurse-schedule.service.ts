import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { Nurse } from './Nurse';

@Injectable({
  providedIn: 'root'
})

export class NurseScheduleService {
  public userArray: NurseSched[] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/Nurse_Shifts.csv',
    {responseType: 'text'})
    .subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        for (let index = 0; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          this.userArray.push(new NurseSched( row[0], row[1], row[2], row[3].trim()));
          // console.log(this.userArray[index])
        }

        //console.log(this.userArray);
        // console.log(this.userArray[4].rn_id);
        /*this.userArray.forEach(row => {
          console.log(row);
          })*/
    },
      error => {
          console.log(error);
      }
    );
    }

    // returns schedule info as an array
    getSched() { 
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
          return this.userArray;
      },
        error => {
            console.log(error);
        }
      );      
      
      // will return empty array if error occurs
      return this.userArray;
    }
  
    // returns list of nurse ids
    getNurseIds(): string[] {

      let ids: string[] = [];

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
          
          // extract and return list of ids
          this.userArray.forEach((s) => {
            ids.push(s.rn_id)
          })

          console.log("ids?", ids)
          return ids;

      },
        error => {
            console.log(error);
        }
      );         

      // returns empty list if error
      return ids;
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