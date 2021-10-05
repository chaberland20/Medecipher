import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningsTableComponent } from './warnings-table.component';

describe('WarningsTableComponent', () => {
  let component: WarningsTableComponent;
  let fixture: ComponentFixture<WarningsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
