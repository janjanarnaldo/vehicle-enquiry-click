import { switchMap, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import {MatSnackBar} from '@angular/material/snack-bar';

import { buildEnquiryToApi } from 'src/app/enquiries/enquiry-mapppers';

import { VehicleService } from '../vehicle-service';

import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles-inquiry',
  templateUrl: './vehicles-inquiry.component.html',
  styleUrls: ['./vehicles-inquiry.component.scss']
})
export class VehiclesInquiryComponent implements OnInit {
  vehicle$: Observable<Vehicle>;

  submitting = false;
  submitted = false;

  redirectingDuration = 5000;

  inquiry = {
    name: '',
    mobile: '',
    email: '',
    enquiry: '',
    salesPersonName: '',
    salesPersonMobile: '',
    vehicleId: '',
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VehicleService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.vehicle$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getVehicle({
        id: params.get('id'),
        buildOtherProps: true,
      })),
      tap(({ id, salesPerson: { name, mobile } }) => {
        this.inquiry.vehicleId = String(id);
        this.inquiry.salesPersonName = name;
        this.inquiry.salesPersonMobile = mobile;
      }),
    );
  }

  onSubmit() {
    this.submitting = true;
    this.submitted = false;

    this.service
      .saveVehicleEnquiry(buildEnquiryToApi(this.inquiry))
      .subscribe(result => {
        this.submitting = false;
        this.submitted = true;

        const timeout = setTimeout(() => {
          this.backToList();
        }, this.redirectingDuration)

        this.snackBar
          .open('Enquiry successfully sent', 'Vehicles List', { duration: this.redirectingDuration })
          .afterDismissed().subscribe(() => {
          this.backToList();
          clearTimeout(timeout);
        });
      });
  }

  backToList() {
    return this.router.navigate(['/vehicles']);
  }

}
