import { NgModule }       from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgImageSliderModule } from 'ng-image-slider';

import { VehiclesListComponent }    from './vehicles-list/vehicles-list.component';
import { VehiclesDetailComponent }  from './vehicles-detail/vehicles-detail.component';
import { VehiclesInquiryComponent } from './vehicles-inquiry/vehicles-inquiry.component';

import { VehiclesRoutingModule } from './vehicles-routing.module';

@NgModule({
  imports: [
    VehiclesRoutingModule,
    NoopAnimationsModule,
    NgImageSliderModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    VehiclesListComponent,
    VehiclesDetailComponent,
    VehiclesInquiryComponent
  ]
})
export class VehiclesModule {}