import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  constructor() { }

  // this input allows us to send the date selected in the calendar from the 
  // 'sidebar' component to the 'nurse-dropdown' component; this allows us
  // to know what day is in the calendar, which is the day we want to add
  // a shift to when we click 'confirm shift'
  @Input('buttonMessage') buttonMessage: any | undefined;

}
