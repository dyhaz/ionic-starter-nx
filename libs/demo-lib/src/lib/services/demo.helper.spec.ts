import { TestBed } from '@angular/core/testing';

import { DemoHelper } from './demo.helper';

describe('DemoHelper', () => {
  let service: DemoHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
