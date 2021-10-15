import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { WarningsTableComponent } from './warnings-table/warnings-table.component';
import { NurseDropdownComponent } from './nurse-dropdown/nurse-dropdown.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GanntChartComponent } from './gannt-chart/gannt-chart.component';
import { CalendarHeadingComponent } from './calendar-heading/calendar-heading.component';
import { GanntTempComponent } from './gannt-temp/gannt-temp.component';
import { WeekCopyComponent } from './week-copy/week-copy.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    WarningsTableComponent,
    NurseDropdownComponent,
    HeaderComponent,
    CalendarComponent,
    GanntChartComponent,
    CalendarHeadingComponent,
    GanntTempComponent,
    WeekCopyComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
