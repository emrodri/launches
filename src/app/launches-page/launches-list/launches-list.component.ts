import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Slice, Store} from '../../store/store.state';
import {LaunchStatus} from '../../store/models/launch-status.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {
  @Input('launches') launches;

  constructor(private store: Store) {
  }

  ngOnInit() {

  }

  getLaunchStatusFromId(status: number) {
    return (this.store.selectSnapShot(Slice.launchStatuses) as LaunchStatus[]).find(s => s.id === status);
  }
}
