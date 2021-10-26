import { TestBed } from '@angular/core/testing';

import { NurseScheduleService } from './nurse-schedule.service';

describe('NurseScheduleService', () => {
  let service: NurseScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NurseScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
