import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
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
    let sched = new NurseScheduleService(this.http)
    sched.getSched()
    
  }
  title = 'NurseScheduler';
}
