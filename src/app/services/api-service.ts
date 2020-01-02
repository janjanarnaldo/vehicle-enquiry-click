import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public enquiriesApiUrl = 'http://6702f313.ngrok.io/api/v1/enquiry';

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    public http: HttpClient,
  ) { }
}
