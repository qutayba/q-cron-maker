import { TestBed } from '@angular/core/testing';

import { QCronMakerService } from './q-cron-maker.service';

describe('QCronMakerService', () => {
  let service: QCronMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QCronMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
