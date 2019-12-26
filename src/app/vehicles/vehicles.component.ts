import { Component, OnInit } from '@angular/core';

import { NO_IMG_URL } from '../constants/online-urls';
import { vehicles } from '../vehicles';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  vehicles = vehicles;
  noImgUrl = NO_IMG_URL;

  constructor() { }

  ngOnInit() {
  }

}
