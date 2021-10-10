import { TestBed } from '@angular/core/testing';

import { MoonboardFieldService } from './moonboard-field.service';

describe('MoonboardFieldService', () => {
  let service: MoonboardFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonboardFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
