import {Component, OnInit} from '@angular/core';
import {ApiService} from '../store/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  launchesLoaded$: Observable<boolean> = this._launches.initialDataLoaded;

  constructor(private _launches: ApiService) {
    this._launches.loadInitialData();
  }

  ngOnInit() {
  }

}
