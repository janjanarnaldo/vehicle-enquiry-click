import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { AppComponent } from './app.component';

import { EnquiriesComponent } from './enquiries/enquiries.component';

import { EnvServiceProvider } from './services/env-service-provider';

@NgModule({
  declarations: [
    AppComponent,
    EnquiriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehiclesModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
