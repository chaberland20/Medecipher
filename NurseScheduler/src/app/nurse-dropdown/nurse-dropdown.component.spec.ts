import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseDropdownComponent } from './nurse-dropdown.component';

describe('NurseDropdownComponent', () => {
  let component: NurseDropdownComponent;
  let fixture: ComponentFixture<NurseDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
