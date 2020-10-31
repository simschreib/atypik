import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordModifyHouseComponent } from './landlord-modify-house.component';

describe('LandlordModifyHouseComponent', () => {
  let component: LandlordModifyHouseComponent;
  let fixture: ComponentFixture<LandlordModifyHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordModifyHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordModifyHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
