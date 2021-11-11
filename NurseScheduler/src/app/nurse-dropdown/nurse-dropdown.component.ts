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

  schedule: NurseSched[] = [];  
  nurseIds: string[] = [];
  shifts: string[] = [];

  shiftData: shiftData[] = [];

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    let scheduleService = new NurseScheduleService(this.http)
    //this.schedule = scheduleService.getSched()
    this.nurseIds = scheduleService.getNurseIds()
    this.shifts = scheduleService.getShifts()
  }


  // methods to update selected shift parameters
  updateSelectedType (event: any) {
    this.selectedType = event.target.value;
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
    if(this.selectedType != "" && this.selectedShift != "" && this.selectedId != "")
      alert("Shift can be added!");
    else
      alert("Error: one or more shift parameters are blank");
  }
}

export class shiftData {
  startTime: number;
  duration: number;

  constructor(startTime: number, duration: number){
    this.startTime = startTime;
    this.duration = duration;
  }
}