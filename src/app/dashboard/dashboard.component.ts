import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoading = true;
  widgetsData;
  widgetsDataSubscription: Subscription;
  testSubscription;

  constructor(private dashboardService: DashboardService ) {}

  ngOnInit() {
    this.testSubscription = this.dashboardService.simpleObservable.subscribe(
      resp => {
        console.log(resp);
      }
    );

    this.widgetsDataSubscription = this.dashboardService.widgetsDataObservable.subscribe(
      resp => {
        this.isLoading = resp ? false : true;
        this.widgetsData = resp;
      }
    );
  }
}
