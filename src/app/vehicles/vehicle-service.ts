import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Vehicle } from './vehicle';
import { mockVehicles } from './mock-vehicles';

import { vehicleImagesMapperForUI, vehicleMakeMapperForUI } from './vehicle-mapper';

interface vehicleParams {
  id: number | string;
  buildImages?: boolean;
  buildMake?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor() { }

  getVehicles(): Observable<Vehicle[]> {
    return of(mockVehicles);
  }

  getVehicle({ id, buildImages, buildMake }: vehicleParams) {
    return this.getVehicles().pipe(
      map((vehicles: Vehicle[]) => {
        const vehicle: Vehicle = vehicles.find(vehicle => vehicle.id === +id);
        return buildImages ? {
          ...vehicle,
          images: vehicleImagesMapperForUI(vehicle.images, vehicle.name),
          makeDetails: vehicleMakeMapperForUI(vehicle),
        } : vehicle;
      })
    );
  }
}
