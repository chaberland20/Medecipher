import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { NurseSched, NurseScheduleService } from './nurse-schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor (private http: HttpClient) {}
  ngOnInit(){
    // let sched = new NurseScheduleService(this.http)
    
    // console.log(sched.userArray)
    
    // for (let index = 1; index < sched.userArray.length-1; index++){
    //   console.log(sched.userArray[index].rn_id)
    // }
  }
  title = 'NurseScheduler';
  public today: Date = new Date ();
  //currentItem = this.today;
  @Input() item!: Date;
}
