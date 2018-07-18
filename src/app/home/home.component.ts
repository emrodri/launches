import {Component, OnInit} from '@angular/core';
import {State} from '../store';
import {Store} from '@ngrx/store';
import {ChangeTitle} from '../store/ui/ui.actions';
import {LaunchesState} from '../store/launch/launch.reducer';
import {map} from 'rxjs/operators';
import {StatusesState} from '../store/status/status.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statuses$ = this.store.select('statuses').pipe(map((statusesStatus: StatusesState) => statusesStatus.statuses));

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select('launches').subscribe((launchesState: LaunchesState) => {
      this.store.dispatch(new ChangeTitle('Home: ' + launchesState.launches.length + ' Lanzamientos'));
    });

  }

}
