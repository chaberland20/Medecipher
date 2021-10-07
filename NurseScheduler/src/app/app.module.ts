import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { WarningsTableComponent } from './warnings-table/warnings-table.component';
import { NurseDropdownComponent } from './nurse-dropdown/nurse-dropdown.component';
import { HeaderComponent } from './header/header.component';
import { GanntChartComponent } from './gannt-chart/gannt-chart.component';
import { CalendarHeadingComponent } from './calendar-heading/calendar-heading.component';
import { GanntTempComponent } from './gannt-temp/gannt-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    WarningsTableComponent,
    NurseDropdownComponent,
    HeaderComponent,
    GanntChartComponent,
    CalendarHeadingComponent,
    GanntTempComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
