import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NO_IMG_URL } from '../../constants/online-urls';

import { VehicleService } from '../vehicle-service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  noImgUrl = NO_IMG_URL;

  vehicles$: Observable<Vehicle[]>;

  constructor(
    private service: VehicleService,
  ) { }

  ngOnInit() {
    this.vehicles$ = this.service.getVehicles();
  }

}
