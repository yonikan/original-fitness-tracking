import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart-widget',
  templateUrl: './line-chart-widget.component.html',
  styleUrls: ['./line-chart-widget.component.scss']
})
export class LineChartWidgetComponent implements OnInit {

  @Input() widgetDataObj: any;

  // lineChart config ===================================================
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#0cc2aa',
      pointBackgroundColor: '#0cc2aa',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartOptions: any = { responsive: true, legend: {position: 'bottom'} };
  public lineChartLabels;
  public lineChartData;

// public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// public lineChartData = [
//   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Week1'},
//   {data: [25, 79, 20, 81, 16, 75, 20], label: 'Week2'}
// ]

  constructor() { }

  ngOnInit() {
    this.lineChartLabels = this.widgetDataObj.lineChartLabels;
    this.lineChartData = this.widgetDataObj.lineChartData;
    // console.log(this.widgetDataObj);
    // console.log(`${this.lineChartType} --- ${this.lineChartData}` );

  }

}
