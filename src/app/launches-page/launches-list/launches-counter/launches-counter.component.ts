import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-counter',
  templateUrl: './launches-counter.component.html',
  styleUrls: ['./launches-counter.component.css']
})
export class LaunchesCounterComponent implements OnInit {
  @Input() counter: number;

  constructor() {
  }

  ngOnInit() {
  }

}
