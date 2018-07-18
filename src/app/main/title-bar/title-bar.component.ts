import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UpdateVersion} from '../../store/ui/ui.actions';
import {map} from 'rxjs/operators';
import {State} from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleBarComponent implements OnInit {
  newVersion$ = this.store.select('ui').pipe(map(uiState => uiState.newVersion));
  title$ = this.store.select('ui').pipe(map(uiState => uiState.title));

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  updateVersion() {
    this.store.dispatch(new UpdateVersion());
  }

}
