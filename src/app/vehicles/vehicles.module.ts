import { NgModule }       from '@angular/core';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { NgImageSliderModule } from 'ng-image-slider';

import { VehiclesListComponent }    from './vehicles-list/vehicles-list.component';
import { VehiclesDetailComponent }  from './vehicles-detail/vehicles-detail.component';

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
    MatGridListModule
  ],
  declarations: [
    VehiclesListComponent,
    VehiclesDetailComponent
  ]
})
export class VehiclesModule {}