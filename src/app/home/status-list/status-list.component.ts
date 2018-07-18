import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {LaunchStatus} from '../../store/models/launch-status.model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusListComponent implements OnInit {
  @Input('statuses') statuses: LaunchStatus[];
  constructor() { }

  ngOnInit() {
  }

}
