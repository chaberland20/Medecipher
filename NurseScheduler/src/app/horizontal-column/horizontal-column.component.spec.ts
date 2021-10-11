import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalColumnComponent } from './horizontal-column.component';

describe('HorizontalColumnComponent', () => {
  let component: HorizontalColumnComponent;
  let fixture: ComponentFixture<HorizontalColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
