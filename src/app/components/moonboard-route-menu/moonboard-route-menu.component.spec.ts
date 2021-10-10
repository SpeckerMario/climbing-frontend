import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonboardRouteMenuComponent } from './moonboard-route-menu.component';

describe('MoonboardRouteMenuComponent', () => {
  let component: MoonboardRouteMenuComponent;
  let fixture: ComponentFixture<MoonboardRouteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonboardRouteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonboardRouteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
