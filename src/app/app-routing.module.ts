import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiriesComponent } from './enquiries/enquiries.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'enquiries', component: EnquiriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { enableTracing: true },
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
