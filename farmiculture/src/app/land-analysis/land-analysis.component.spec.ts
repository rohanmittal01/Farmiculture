import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAnalysisComponent } from './land-analysis.component';

describe('LandAnalysisComponent', () => {
  let component: LandAnalysisComponent;
  let fixture: ComponentFixture<LandAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
