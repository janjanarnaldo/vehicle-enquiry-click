import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehiclesListComponent }    from './vehicles-list/vehicles-list.component';
import { VehiclesDetailComponent }  from './vehicles-detail/vehicles-detail.component';

const vehiclesRoutes: Routes = [
  { path: 'app-vehicles', redirectTo: '/vehicles' },
  { path: 'app-vehicle/:id', redirectTo: '/vehicle/:id' },
  { path: 'vehicles',  component: VehiclesListComponent },
  { path: 'vehicle/:id', component: VehiclesDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(vehiclesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VehiclesRoutingModule { }
