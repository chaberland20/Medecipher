import { Component, OnInit } from '@angular/core';
import { NurseSched, NurseScheduleService } from '../nurse-schedule.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NURSES } from '../mock-staff';
import { Nurse } from '../Nurse';

@Component({
  selector: 'app-nurse-dropdown',
  templateUrl: './nurse-dropdown.component.html',
  styleUrls: ['./nurse-dropdown.component.css']
})

export class NurseDropdownComponent implements OnInit {

  nurses: Nurse[] = NURSES;
  selectedType: string = "";
  schedule: NurseSched[] = [];  
  nurseIds: string[] = [];

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    let scheduleService = new NurseScheduleService(this.http)
    this.schedule = scheduleService.getSched()
    this.nurseIds = scheduleService.getNurseIds()

    //console.log(this.schedule)

    /*this.nurseIds.forEach((id) => {
      console.log(id);
    });*/

  }


  // update type 
  selectChangeHandler (event: any) {
    this.selectedType = event.target.value;
  }

}
