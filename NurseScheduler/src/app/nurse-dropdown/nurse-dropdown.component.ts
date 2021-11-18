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
    this.shiftTypes = scheduleService.getShiftTypes()
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

}
