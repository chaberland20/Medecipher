import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanntTempComponent } from './gannt-temp.component';

describe('GanntTempComponent', () => {
  let component: GanntTempComponent;
  let fixture: ComponentFixture<GanntTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanntTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanntTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
