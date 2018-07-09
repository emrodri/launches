import {Component, OnInit} from '@angular/core';
import {ApiService} from '../store/api.service';
import {Observable} from 'rxjs';
import {SwUpdate} from '@angular/service-worker';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {State} from '../store';
import {ActionsSubject, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {NewVersionAvailable, UiActionTypes} from '../store/ui/ui.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dataLoading$: Observable<boolean> = this.store.select('ui').pipe(map(ui => ui.loading));

  constructor(private _launches: ApiService,
              private store: Store<State>,
              private swUpdate: SwUpdate) {
  }

  ngOnInit() {
    this._launches.loadInitialData();
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        this.store.dispatch(new NewVersionAvailable());
      });
    }
  }

}
