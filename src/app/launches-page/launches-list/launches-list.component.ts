import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {
  @Input('launches') launches: any[];
  constructor() {}

  ngOnInit() {}

}
