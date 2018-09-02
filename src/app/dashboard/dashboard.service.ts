import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { UIService } from '../shared/ui.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Exercise } from '../training/exercise.model';


@Injectable()
export class DashboardService {

  finishedExercisesChanged = new Subject<Exercise[]>();
  private fbSubs: Subscription[] = [];

  widgetsDataObservable = new Observable((observer) => {
    setTimeout(() => {
      let test = [
        {
          type: 'lineChart',
          name: 'widget num 2',
          id: '2',
          lineChartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          lineChartData: [
            {data: [65, 59, 80, 81, 56, 55, 40], label: 'Week1'},
            {data: [25, 79, 20, 81, 16, 75, 20], label: 'Week2'}
          ]
        },
        {
          type: 'lineChart',
          name: 'widget num 4',
          id: '4',
          lineChartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          lineChartData: [
            {data: [65, 59, 80, 81, 56, 55, 40], label: 'Week1'},
            {data: [25, 79, 20, 81, 16, 75, 20], label: 'Week2'}
          ]
        }
      ];
      observer.next(test);
      observer.complete();
    }, 2000);

  });

  constructor(private db: AngularFirestore, private uiService: UIService) {}

  fetchCompletedOrCancelledExercisesForCharts() {
    this.fbSubs.push(this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Exercise[]) => {
        this.finishedExercisesChanged.next(exercises);
      }));
  }
}
