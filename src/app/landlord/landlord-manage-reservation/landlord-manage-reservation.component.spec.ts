import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordManageReservationComponent } from './landlord-manage-reservation.component';

describe('LandlordManageReservationComponent', () => {
  let component: LandlordManageReservationComponent;
  let fixture: ComponentFixture<LandlordManageReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordManageReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordManageReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
