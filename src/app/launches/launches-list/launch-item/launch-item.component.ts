import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Launch} from '../../../store/models/launch.model';

@Component({
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchItemComponent implements OnInit {
  @Input('launch') launch: Launch;
  constructor() { }

  ngOnInit() {
  }

}
