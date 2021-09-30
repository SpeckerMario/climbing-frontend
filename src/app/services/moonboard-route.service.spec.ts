import { TestBed } from '@angular/core/testing';

import { MoonboardRouteService } from './moonboard-route.service';

describe('MoonboardRouteService', () => {
  let service: MoonboardRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonboardRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
