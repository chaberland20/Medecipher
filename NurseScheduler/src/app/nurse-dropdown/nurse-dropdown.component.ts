import { Component, OnInit } from '@angular/core';
import { NurseScheduleService } from '../nurse-schedule.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nurse-dropdown',
  templateUrl: './nurse-dropdown.component.html',
  styleUrls: ['./nurse-dropdown.component.css']
})

export class NurseDropdownComponent implements OnInit {

  selectedType: string = "";
  selectedShift: string = "";
  selectedId: string = "";
  
  currentRun: string = "";
  nurseIds: string[] = [];
  shiftTypes: string[] = [];
  public userArray: NurseSched[] = [];
  

  constructor (private http: HttpClient) {
    this.http.get('assets/Nurse_Shifts.csv',
    {responseType: 'text'})
    .subscribe(
      data => {
        let csvToRowArray = data.split("\n");
        let row = csvToRowArray[1].split(",");  // get run_id from first nurse object, index 1 to ignore .csv header row
        this.currentRun = row[0];
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
    console.log("adding the following to the schedule:", "\nRun_ID - ", this.currentRun, "\nDate - HARDCODED 11/14/20", "\nRN_ID - ", id, "\nShift_Assigned - ", shift)
  }


  // returns list of preexisting shifts (no duplicates)
  getShiftTypes() {
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