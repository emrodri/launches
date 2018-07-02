import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {
  @Input('launches') launches;
  statuses = [];

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select('statuses').subscribe(statusesState => this.statuses = statusesState.statuses);
  }

  getLaunchStatusFromId(status: number) {
    return this.statuses.find(s => s.id === status);
  }
}
