import { TestBed } from '@angular/core/testing';

import { DemoHelperService } from './demo-helper.service';

describe('DemoHelperService', () => {
  let service: DemoHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
