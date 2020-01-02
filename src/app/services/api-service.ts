import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EnvService } from './env-service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  enquiriesApiUrl: string;

  constructor(
    public http: HttpClient,
    private env: EnvService
  ) {
    this.enquiriesApiUrl = `${this.env.apiUrl}/enquiry`;
  }
}
