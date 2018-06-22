import {Component, OnInit} from '@angular/core';
import {Slice, Store} from '../store/store.state';

@Component({
  selector: 'app-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.css']
})
export class LaunchesPageComponent implements OnInit {
  filteredLaunches;
  launches;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.launches = this.filteredLaunches = this.store.selectSnapShot(Slice.launches);
    this.store.select$(Slice.launches)
      .subscribe(launches => {
        this.launches = launches;
      });
  }

  onSearch(searchValues) {
    this.filteredLaunches = this.launches.filter(
      l => {
        return (
          l.name.toLowerCase().includes(searchValues.text.toLowerCase()) &&
          (searchValues.mission === '' || this.checkMissionOnLaunch(l, searchValues.mission).length) &&
          (searchValues.agency === '' || this.checkAgenciesOnLaunch(l, searchValues.agency).length) &&
          (searchValues.status === '' || l.status === Number(searchValues.status))
        );
      });
  }

  checkMissionOnLaunch(launch, missionId) {
    return launch.missions.filter(m => m.type === Number(missionId));
  }

  checkAgenciesOnLaunch(launch, agencyId) {
    return launch.missions.filter(m => {
      return (m.agencies && m.agencies.filter(a => a.id === Number(agencyId)).length);
    });
  }

}
