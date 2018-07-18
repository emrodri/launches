import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {LaunchStatus} from '../../../store/models/launch-status.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent implements OnInit {
  @Input('status') status: LaunchStatus;
  constructor() { }

  ngOnInit() {
  }

}
