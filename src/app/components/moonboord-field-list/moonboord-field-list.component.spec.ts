import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonboordFieldListComponent } from './moonboord-field-list.component';

describe('MoonboordFieldListComponent', () => {
  let component: MoonboordFieldListComponent;
  let fixture: ComponentFixture<MoonboordFieldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonboordFieldListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonboordFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
