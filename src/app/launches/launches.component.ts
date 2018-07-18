import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {State} from '../store';
import {Store} from '@ngrx/store';
import {Launch} from '../store/models/launch.model';
import {LaunchesState} from '../store/launch/launch.reducer';
import {ChangeTitle} from '../store/ui/ui.actions';
import {StatusesState} from '../store/status/status.reducer';
import {LaunchStatus} from '../store/models/launch-status.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  statusLaunches: Launch[];
  status: LaunchStatus;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<State>) {
  }

  ngOnInit() {
    const statusId = this.activatedRoute.snapshot.params['id'];
    this.store.select('statuses').subscribe((statusesState: StatusesState) => {
      this.status = statusesState.statuses.find(s => s.id === Number(statusId));
    });
    this.store.dispatch(new ChangeTitle('Estado: ' + this.status.name));
    this.store.select('launches')
      .pipe(
        map((launchesState: LaunchesState) => {
          return launchesState.launches
            .filter(l => l.status === Number(statusId));
        })
      )
      .subscribe((launches) => {
        this.statusLaunches = launches;
        this.orderLaunchesByLaunchTime('ASC');
      });
  }

  orderLaunchesByLaunchTime(order) {
    const sortedLaunches = this.statusLaunches.sort((a, b) => {
      if (order === 'ASC') {
        return (a.isostart > b.isostart ? 1 : -1);
      } else {
        return (a.isostart > b.isostart ? -1 : 1);
      }
    });
    this.statusLaunches = [...sortedLaunches];
  }

}
