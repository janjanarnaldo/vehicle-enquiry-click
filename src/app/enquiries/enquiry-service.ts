import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ApiService } from 'src/app/services/api-service';

import { buildEnquiryToUI } from './enquiry-mappers';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {

  constructor(private apiService: ApiService) { }

  getEnquiries(): Observable<any> {
    return this.apiService.http.get(`${this.apiService.enquiriesApiUrl}/`)
      .pipe(
        map((vehicles: []) => vehicles.map(buildEnquiryToUI)),
      );
  }

  callSeller(identifier): Observable<any> {
    return this.apiService.http.post(`${this.apiService.enquiriesApiUrl}/call/${identifier}`, []);
  }
}
