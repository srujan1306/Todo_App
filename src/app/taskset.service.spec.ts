import { TestBed } from '@angular/core/testing';

import { TasksetService } from './taskset.service';

describe('TasksetService', () => {
  let service: TasksetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
