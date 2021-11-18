import { Component, OnInit } from '@angular/core';
import { NurseSched, NurseScheduleService } from '../nurse-schedule.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nurse-dropdown',
  templateUrl: './nurse-dropdown.component.html',
  styleUrls: ['./nurse-dropdown.component.css']
})

export class NurseDropdownComponent implements OnInit {

  selectedType: string = "";
  selectedShift: string = "";
  selectedId: string = "";

  nurseIds: string[] = [];
  shiftTypes: string[] = [];

  
  constructor (private http: HttpClient) { }

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
    if(this.selectedType != "" && this.selectedShift != "" && this.selectedId != "") {
      // write shift to .csv file
      this.writeShift(this.selectedType, this.selectedShift, this.selectedId)
    }
    else
      alert("Error: One or more shift details are blank.");
  }


  // writes a shift to 'Nurse_Shifts.csv'
  writeShift(type: string, shift: string, id: string) {

  }

}
