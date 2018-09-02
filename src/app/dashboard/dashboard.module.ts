import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WidgetContainerComponent } from './widget-container/widget-container.component';

@NgModule({
  imports: [
    // CommonModule
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, WidgetContainerComponent]
})
export class DashboardModule { }
