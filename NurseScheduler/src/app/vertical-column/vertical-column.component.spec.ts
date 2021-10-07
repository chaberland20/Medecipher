import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalColumnComponent } from './vertical-column.component';

describe('VerticalColumnComponent', () => {
  let component: VerticalColumnComponent;
  let fixture: ComponentFixture<VerticalColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
