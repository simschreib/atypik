import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHouseComponent } from './modify-house.component';

describe('ModifyHouseComponent', () => {
  let component: ModifyHouseComponent;
  let fixture: ComponentFixture<ModifyHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
