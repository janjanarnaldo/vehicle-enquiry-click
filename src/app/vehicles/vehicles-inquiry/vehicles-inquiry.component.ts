import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-vehicles-inquiry',
  templateUrl: './vehicles-inquiry.component.html',
  styleUrls: ['./vehicles-inquiry.component.scss']
})
export class VehiclesInquiryComponent implements OnInit {
  vehicleId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.vehicleId$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(params.get('id')) )
    );
  }

}
