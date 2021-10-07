import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarHeadingComponent } from './calendar-heading.component';

describe('CalendarHeadingComponent', () => {
  let component: CalendarHeadingComponent;
  let fixture: ComponentFixture<CalendarHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
