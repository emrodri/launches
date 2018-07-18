import {Component, OnInit} from '@angular/core';
import {ChangeTitle} from '../store/ui/ui.actions';
import {State} from '../store';
import {Store} from '@ngrx/store';
import {Launch} from '../store/models/launch.model';
import {LaunchesState} from '../store/launch/launch.reducer';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  launch: Launch;

  constructor(private store: Store<State>, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const launchId = this.activatedRoute.snapshot.params['launchId'];
    this.store.select('launches')
      .pipe(
        map((launchesState: LaunchesState) => {
          return launchesState.launches
            .find(l => l.id === Number(launchId));
        })
      )
      .subscribe((launch: Launch) => {
        this.launch = launch;
        this.store.dispatch(new ChangeTitle(this.launch.name));
      });
  }

}
