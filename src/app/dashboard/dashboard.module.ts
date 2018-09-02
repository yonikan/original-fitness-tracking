import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartWidgetComponent } from './widgets/line-chart-widget/line-chart-widget.component';

@NgModule({
  imports: [
    // CommonModule
    SharedModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    WidgetContainerComponent,
    LineChartWidgetComponent
  ]
})
export class DashboardModule { }
