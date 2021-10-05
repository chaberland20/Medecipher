import { Component } from '@angular/core';

@Component({
  selector: 'app-nurse-dropdown',
  templateUrl: './nurse-dropdown.component.html',
  styleUrls: ['./nurse-dropdown.component.css']
})
export class NurseDropdownComponent {

  constructor() { }

  toggleDropdown() {
    let dropdown:any = <any>document.getElementById("nurseList")
    if(dropdown.style.display == "none")
      dropdown.style.display = "block";
    else
      dropdown.style.display = "none";
      
  }

}
