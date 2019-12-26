import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Vehicle } from './vehicle';
import { mockVehicles } from './mock-vehicles';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor() { }

  getVehicles(): Observable<Vehicle[]> {
    return of(mockVehicles);
  }

  getVehicle(id: number | string) {
    return this.getVehicles().pipe(
      // (+) before `id` turns the string into a number
      map((vehicles: Vehicle[]) => vehicles.find(vehicle => vehicle.id === +id))
    );
  }
}
