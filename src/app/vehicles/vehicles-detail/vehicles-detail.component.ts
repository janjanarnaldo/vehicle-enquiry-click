import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle-service';

@Component({
  selector: 'app-vehicles-detail',
  templateUrl: './vehicles-detail.component.html',
  styleUrls: ['./vehicles-detail.component.scss']
})
export class VehiclesDetailComponent implements OnInit {
  vehicle$: Observable<Vehicle>;

  constructor(
    private route: ActivatedRoute,
    private service: VehicleService,
  ) { }

  ngOnInit() {
    this.vehicle$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getVehicle({
        id: params.get('id'),
        buildImages: true,
        buildMake: true,
      }))
    );
  }

}
