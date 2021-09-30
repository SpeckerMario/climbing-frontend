import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonboardRouteListComponent } from './moonboard-route-list.component';

describe('MoonboardRouteListComponent', () => {
  let component: MoonboardRouteListComponent;
  let fixture: ComponentFixture<MoonboardRouteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonboardRouteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonboardRouteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
