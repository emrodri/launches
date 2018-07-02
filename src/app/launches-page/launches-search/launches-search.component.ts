import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {map} from 'rxjs/operators';
import {ApiService} from '../../store/api.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-search',
  templateUrl: './launches-search.component.html',
  styleUrls: ['./launches-search.component.css']
})
export class LaunchesSearchComponent implements OnInit {
  @ViewChild('searchText') searchText: ElementRef;
  @ViewChild('selectMission') selectMission: ElementRef;
  @ViewChild('selectAgency') selectAgency: ElementRef;
  @ViewChild('selectStatus') selectStatus: ElementRef;
  missions$ = this.store.select('missionTypes').pipe(map(missionTypesState => missionTypesState.missionTypes));
  statuses$ = this.store.select('statuses').pipe(map(statusesState => statusesState.statuses));
  agencies$ = this.store.select('agencies').pipe(map(agenciesState => agenciesState.agencies));

  constructor(private store: Store<State>, private api: ApiService) {
  }

  ngOnInit() {
  }

  onSearch = () => {
    const searchValues = {
      text: this.searchText.nativeElement.value,
      mission: this.selectMission.nativeElement.value,
      agency: this.selectAgency.nativeElement.value,
      status: this.selectStatus.nativeElement.value,
    };
    this.api.searchLaunches(searchValues);
  };

}
