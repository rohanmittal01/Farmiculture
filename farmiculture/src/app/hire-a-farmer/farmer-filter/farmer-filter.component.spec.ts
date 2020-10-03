import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerFilterComponent } from './farmer-filter.component';

describe('FarmerFilterComponent', () => {
  let component: FarmerFilterComponent;
  let fixture: ComponentFixture<FarmerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
