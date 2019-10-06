import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DadosService } from './dados.service';
import { DashboardRoutingComponent } from "./dashboar-routing.component";
import { DashboardRoutingModule, DashboardRoutes } from "./dashboard-routing.module";

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRoutingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DadosService
  ]
})
export class DashboardModule { }
