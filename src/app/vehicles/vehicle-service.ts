import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ApiService } from 'src/app/services/api-service';
import { EnquiryApi } from 'src/app/enquiries/enquiry';

import { Vehicle } from './vehicle';
import { mockVehicles } from './mock-vehicles';

import { vehicleImagesMapperForUI, vehicleMakeMapperForUI } from './vehicle-mapper';

interface vehicleParams {
  id: number | string;
  buildOtherProps?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class VehicleService {

  constructor(private apiService: ApiService) { }

  testEnquiry(): Observable<any> {
    console.log('here');
    return this.apiService.http.get(`${this.apiService.enquiriesApiUrl}/test`)
      .pipe(
        tap(_ => console.log('fetched test')),
      );
  }

  getVehicles(): Observable<Vehicle[]> {
    return of(mockVehicles);
  }

  getVehicle({ id, buildOtherProps }: vehicleParams) {
    return this.getVehicles().pipe(
      map((vehicles: Vehicle[]) => {
        const vehicle: Vehicle = vehicles.find(vehicle => vehicle.id === +id);
        return buildOtherProps ? {
          ...vehicle,
          images: vehicleImagesMapperForUI(vehicle.images, vehicle.name),
          makeDetails: vehicleMakeMapperForUI(vehicle),
        } : vehicle;
      })
    );
  }

  saveVehicleEnquiry(inquiry: EnquiryApi): Observable<any> {
    return this.apiService.http.post(`${this.apiService.enquiriesApiUrl}/store`, inquiry);
  }
}
