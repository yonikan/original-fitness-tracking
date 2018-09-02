import { Component, OnInit,  OnDestroy,  Input } from '@angular/core';
import { UIService } from '../../shared/ui.service';
import { Subscription } from 'rxjs/Subscription';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit, OnDestroy {

  @Input() widgetTitle: any;
  @Input() widgetData: any;
  isLoading = false;
  widgetsDataSubscription: Subscription;
  // public lineChartLabels;
  // public lineChartData;



  // private widgetsSubscription: Subscription;
  // private loadingSubscription: Subscription;

  constructor( private uiService: UIService, private dashboardService: DashboardService) { }

  ngOnInit() {
    // this.widgetsDataSubscription = this.dashboardService.widgetsDataObservable.subscribe(
    //   resp => {
    //     this.isLoading = this.widgetData ? false : true;
    //     this.widgetData = resp;
    //   }
    // );



    // this.lineChartLabels = this.widgetData.lineChartLabels;
    // this.lineChartData = this.widgetData.lineChartData;
    // this.



    // this.widgetsSubscription = this.dashboardService.widgetsChanged.subscribe(
    //   fetchedWidgets => {
    //     this.isLoading = false;

    //   }
    // );

    // this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
    //   isLoading => {
    //     this.isLoading = isLoading;
    //   }
    // );
  }

  ngOnDestroy() {

    // if (this.loadingSubscription) {
    //   this.loadingSubscription.unsubscribe();
    // }
  }
}
