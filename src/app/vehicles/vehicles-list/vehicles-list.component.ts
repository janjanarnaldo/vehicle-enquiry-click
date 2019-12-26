import { Component, OnInit } from '@angular/core';

import { NO_IMG_URL } from '../../constants/online-urls';
import { vehicles } from '../vehicles';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  vehicles = vehicles;
  noImgUrl = NO_IMG_URL;

  constructor() { }

  ngOnInit() {
  }

}
