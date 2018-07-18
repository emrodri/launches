import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-launches-bar',
  templateUrl: './launches-bar.component.html',
  styleUrls: ['./launches-bar.component.css']
})
export class LaunchesBarComponent implements OnInit {
  order = 'ASC';
  @Input('launchesCount') launchesCount: number;
  @Output('toogleOrder') toogleOrder = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onClickChangeOrder() {
    this.order = (this.order === 'ASC') ? 'DESC' : 'ASC';
    this.toogleOrder.emit(this.order);
  }

}
