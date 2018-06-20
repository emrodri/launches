import {Component, OnInit} from '@angular/core';
import {LaunchesService} from '../services/launches.service';

@Component({
  selector: 'app-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.css']
})
export class LaunchesPageComponent implements OnInit {
  filteredLaunches: any[] = [];

  constructor(private _launches: LaunchesService) {
  }

  ngOnInit() {
    this.filteredLaunches = this._launches.launches;
  }

  onSearch(searchValues) {
    this.filteredLaunches = this._launches.launches.filter(
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
