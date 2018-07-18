import {Component, Input, OnInit} from '@angular/core';
import {Launch} from '../../store/models/launch.model';

@Component({
  selector: 'app-launch-bar',
  templateUrl: './launch-bar.component.html',
  styleUrls: ['./launch-bar.component.css']
})
export class LaunchBarComponent implements OnInit {
  @Input('launch') launch: Launch;
  constructor() { }

  ngOnInit() {
  }

}
