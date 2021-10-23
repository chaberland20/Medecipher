import { Component } from '@angular/core';
import { NURSES } from '../mock-staff';
import { Nurse } from '../Nurse';

@Component({
  selector: 'app-nurse-dropdown',
  templateUrl: './nurse-dropdown.component.html',
  styleUrls: ['./nurse-dropdown.component.css']
})

export class NurseDropdownComponent {

  nurses: Nurse[] = NURSES
  selectedType: string = "";

    // update type 
    selectChangeHandler (event: any) {
      this.selectedType = event.target.value;
    }

}
