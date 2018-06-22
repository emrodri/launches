import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Slice, Store} from '../../store/store.state';

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

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.select$(Slice.missionTypes).subscribe(missionTypes => this.missions = missionTypes);
    this.store.select$(Slice.launchStatuses).subscribe(statuses => this.statuses = statuses);
    this.store.select$(Slice.agencies).subscribe(agencies => this.agencies = agencies);
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
