import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-search',
  templateUrl: './launches-search.component.html',
  styleUrls: ['./launches-search.component.css']
})
export class LaunchesSearchComponent implements OnInit {
  @Output() public search = new EventEmitter<any>();
  @ViewChild('searchText') searchText: ElementRef;
  @ViewChild('selectMission') selectMission: ElementRef;
  @ViewChild('selectAgency') selectAgency: ElementRef;
  @ViewChild('selectStatus') selectStatus: ElementRef;
  missions: any[];
  statuses: any[];
  agencies: any[];

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select('missionTypes').subscribe(missionTypesState => this.missions = missionTypesState.missionTypes);
    this.store.select('statuses').subscribe(statusesState => this.statuses = statusesState.statuses);
    this.store.select('agencies').subscribe(agenciesState => this.agencies = agenciesState.agencies);
  }

  onSearch = () => {
    const searchValues = {
      text: this.searchText.nativeElement.value,
      mission: this.selectMission.nativeElement.value,
      agency: this.selectAgency.nativeElement.value,
      status: this.selectStatus.nativeElement.value,
    };
    this.search.next(searchValues);
  };

}
