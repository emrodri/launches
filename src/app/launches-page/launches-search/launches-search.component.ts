import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {LaunchesService} from '../../services/launches.service';

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
  constructor(private _launches: LaunchesService) {
  }

  ngOnInit() {
    this.missions = this._launches.launchMissions;
    this.statuses = this._launches.launchStatuses;
    this.agencies = this._launches.launchAgencies;
  }

  onSearch = () => {
    const searchValues = {
      text: this.searchText.nativeElement.value,
      mission: this.selectMission.nativeElement.value,
      agency: this.selectAgency.nativeElement.value,
      status: this.selectStatus.nativeElement.value,
    };
    this.search.next(searchValues);
  }

}
