import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekCopyComponent } from './week-copy.component';

describe('WeekCopyComponent', () => {
  let component: WeekCopyComponent;
  let fixture: ComponentFixture<WeekCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
