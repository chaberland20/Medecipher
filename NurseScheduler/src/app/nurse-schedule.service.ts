import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { Nurse } from './Nurse';

@Injectable({
  providedIn: 'root'
})

export class NurseScheduleService {
  public userArray: NurseSched[] = [];
  getSched(){return NurseSched;}

  constructor(private http: HttpClient) {
    this.http.get('assets/Nurse_Shifts.csv',
    {responseType: 'text'})
    .subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          this.userArray.push(new NurseSched( row[0], row[1], row[2], row[3].trim()));
        }
        console.log(this.userArray);
    },
      error => {
          console.log(error);
      }
    );
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