import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EnquiryService } from './enquiry-service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss']
})
export class EnquiriesComponent implements OnInit {
  displayedColumns = [
    'vehicleId',
    'salesPersonName',
    'salesPersonMobile',
    'name',
    'mobile',
    'recording',
    'action',
  ];
  enquiries$: Observable<[]>;

  constructor(
    private service: EnquiryService,
  ) { }

  ngOnInit() {
    this.enquiries$ = this.service.getEnquiries();
  }

  onCallSeller(inquiry) {
    inquiry.calling = true;

    this.service.callSeller(inquiry.identifier).subscribe(() => { inquiry.callInitiated = true; });
  }

}
