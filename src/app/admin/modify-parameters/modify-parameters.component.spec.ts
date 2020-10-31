import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyParametersComponent } from './modify-parameters.component';

describe('ModifyParametersComponent', () => {
  let component: ModifyParametersComponent;
  let fixture: ComponentFixture<ModifyParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
