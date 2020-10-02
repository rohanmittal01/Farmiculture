import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireAFarmerComponent } from './hire-a-farmer.component';

describe('HireAFarmerComponent', () => {
  let component: HireAFarmerComponent;
  let fixture: ComponentFixture<HireAFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireAFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireAFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
