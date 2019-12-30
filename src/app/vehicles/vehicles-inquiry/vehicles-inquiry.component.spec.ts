import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesInquiryComponent } from './vehicles-inquiry.component';

describe('VehiclesInquiryComponent', () => {
  let component: VehiclesInquiryComponent;
  let fixture: ComponentFixture<VehiclesInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
