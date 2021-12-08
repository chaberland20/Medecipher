import { Component, Input, OnInit } from '@angular/core';
import { NurseScheduleService } from '../nurse-schedule.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nurse-dropdown',
  templateUrl: './nurse-dropdown.component.html',
  styleUrls: ['./nurse-dropdown.component.css']
})

export class NurseDropdownComponent implements OnInit {

  // variables to store the options chosen from the dropdown
  selectedType: string = "";
  selectedShift: string = "";
  selectedId: string = "";
  
  // used for processing .csv file
  currentRun: string = "";
  nurseIds: string[] = [];
  shiftTypes: string[] = [];
  public userArray: NurseSched[] = [];
  

  constructor (private http: HttpClient) {

    // this allows us to read in the .csv data to get the current run
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
    // NOTE: this should be done through the nurse-schedule.service.ts, but  *
    //       we weren't able to get it functioning in time; this should only *
    //       be a temporary solution                                         *
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    this.http.get('assets/Nurse_Shifts.csv',
    {responseType: 'text'})
    .subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        let row = csvToRowArray[1].split(",");  // get run_id from first nurse object, index 1 to ignore .csv header row
        this.currentRun = row[0];               // save the id of the current run
    },
      error => {
          console.log(error);
      }
    );
   }


  // load data from .csv file on instantiation
  ngOnInit(): void {
    let scheduleService = new NurseScheduleService(this.http)
    this.nurseIds = scheduleService.getNurseIds()
    this.getShiftTypes()
  }

  @Input('childMessage') today: any | undefined; /* date gets passed from calendar to app to sidebar to here */


  // methods to update selected shift parameters
  updateSelectedType (event: any) {
    this.selectedType = event.target.value;
    this.selectedId = "";   // reset ID when type is changed, prevents previous id from being assigned another shift
  }

  updateSelectedShift (event: any) {
    this.selectedShift = event.target.value;
  }

  updateSelectedID (event: any) {
    this.selectedId = event.target.value;
  }


  // return type of nurse based on id
  checkType (id: string) {
    if(id.search("CRN") != -1) return "CRN"
    else if(id.search("DDRN") != -1) return "DDRN"
    else if(id.search("EDRN") != -1) return "EDRN"  // all nurse ids contain 'EDRN', so put this if statement last
    else return "N/A"
  }


  // ensures user has selected all shift parameters
  verifyShift() {
    // if user input all parameters, save new shift to the schedule
    if(this.selectedType != "" && this.selectedShift != "" && this.selectedId != "") {
      this.writeShift(this.selectedId, this.selectedShift)
    }
    else
      alert("Error: One or more shift details are blank.");
  }


  // writes a shift to 'Nurse_Shifts.csv'
  writeShift(id: string, shift: string) {
    var date = new Date();
    date.setDate(this.today.getDate());  // make date data match the same format as the .csv file
    
    // currently, this only writes relevant data to the console
    // all information printed in this log statement should go to the .csv file
    console.log("adding the following to the schedule:", "\nRun_ID - ", this.currentRun, "\nDate - ", this.rewriteDate(date), "\nRN_ID - ", id, "\nShift_Assigned - ", shift)
  }

  // configures a date to make it human-readable
  rewriteDate(date: Date) {
    var oldDate = date.toString()
    var month = new String;

    switch (oldDate.substring(4, 7)){
      case "Jan": 
        month = "1";
        break;
      case "Feb":
        month = "2";
        break;
      case "Mar":
        month = "3";
        break;
      case "Apr": 
        month = "4";
        break;
      case "May": 
        month = "5";
        break;
      case "Jun": 
        month = "6";
        break;
      case "Jul": 
        month = "7";
        break;
      case "Aug": 
        month = "8";
        break;
      case "Sep":
        month = "9";
        break;
      case "Oct": 
        month = "10";  
        break;                
      case "Nov": 
        month = "11";
        break;
      default: 
        month = "12";      
    }

    var day = oldDate.substring(8, 10)
    var year = oldDate.substring(11, 15)
    var newDate = new String;
    newDate = month + "/" + day + "/" + year
    return newDate;
  }


  // returns list of preexisting shifts (no duplicates)
  getShiftTypes() {

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
    // NOTE: this should be done through the nurse-schedule.service.ts, but  *
    //       we weren't able to get it functioning in time; this should only *
    //       be a temporary solution                                         *
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

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
        if(!this.shiftTypes.includes(s.shift_assigned) && s.shift_assigned.search("HR") != -1) this.shiftTypes.push(s.shift_assigned)
      })
      this.organizeShifts()
    },
    error => {
        console.log(error);
    }
  );   
  }

  // orders list of shifts by duration and start time
  organizeShifts() {
    var data: shiftData[] = [];
    var sortedShifts: string[] = [];
    // extract duration and start time
    this.shiftTypes.forEach((s) => {      
      var startTime = +s.substring(0, 2)
      var duration = +s.substring(5, 7) 
      var shift = new shiftData(startTime, duration)
      data.push(shift);
    })
    // sort by duration, then by start time
    data = data.sort((a, b) => ( (a.duration < b.duration) || (a.duration == b.duration && a.startTime < b.startTime) ? -1 : 1))

    data.forEach((d) => {
      sortedShifts.push(d.startTime + ":00 " + d.duration + "hr")
    })

    this.shiftTypes = sortedShifts;
  }

}

// this class is a repeat from nurse-schedule.service.ts
// should be deleted after getShiftTypes() and the constructor()
// get data from nurse-schedule.service.ts instead
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

// helper class for organizeShift()
export class shiftData{
  startTime: number;
  duration: number;

  constructor(startTime: number, duration: number) {
    this.duration = duration;
    this.startTime = startTime;
  }
}
