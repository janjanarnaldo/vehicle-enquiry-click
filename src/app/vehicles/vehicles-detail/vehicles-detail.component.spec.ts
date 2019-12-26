import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesDetailComponent } from './vehicles-detail.component';

describe('VehiclesDetailComponent', () => {
  let component: VehiclesDetailComponent;
  let fixture: ComponentFixture<VehiclesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
