import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { WarningsTableComponent } from './warnings-table/warnings-table.component';
import { NurseDropdownComponent } from './nurse-dropdown/nurse-dropdown.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GanntChartComponent } from './gannt-chart/gannt-chart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { WeekCopyComponent } from './week-copy/week-copy.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    WarningsTableComponent,
    NurseDropdownComponent,
    CalendarComponent,
    GanntChartComponent,
    SidebarComponent,
    WeekCopyComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
