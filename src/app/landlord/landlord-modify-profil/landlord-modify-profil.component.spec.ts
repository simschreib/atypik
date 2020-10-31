import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordModifyProfilComponent } from './landlord-modify-profil.component';

describe('LandlordModifyProfilComponent', () => {
  let component: LandlordModifyProfilComponent;
  let fixture: ComponentFixture<LandlordModifyProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordModifyProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordModifyProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
