import {Component, OnInit} from '@angular/core';
import {State} from '../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-launches-page',
  templateUrl: './launches-page.component.html',
  styleUrls: ['./launches-page.component.css']
})
export class LaunchesPageComponent implements OnInit {
  filteredLaunches;
  launches;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select('launches')
      .subscribe(launchesState => {
        this.launches = this.filteredLaunches = launchesState.launches;
      });
  }

  onSearch(searchValues) {
    this.filteredLaunches = this.launches.filter(
      l => {
        return (
          l.name.toLowerCase().includes(searchValues.text.toLowerCase()) &&
          (searchValues.mission === '' || this.checkMissionOnLaunch(l, searchValues.mission)) &&
          (searchValues.agency === '' || this.checkAgenciesOnLaunch(l, searchValues.agency)) &&
          (searchValues.status === '' || l.status === Number(searchValues.status))
        );
      });
  }

  checkMissionOnLaunch(launch, missionId) {
    return launch.missions.filter(m => m.type === Number(missionId)).length > 0;
  }

  checkAgenciesOnLaunch(launch, agencyId) {
    const checkOnMissions = launch.missions.filter(m => {
      return (m.agencies && m.agencies.filter(a => a.id === Number(agencyId)).length > 0);
    }).length > 0;
    const checkOnRocket = (
      launch.rocket &&
      launch.rocket.agencies &&
      launch.rocket.agencies.filter(a => a.id === Number(agencyId)).length > 0
    ) || 0;
    return checkOnMissions || checkOnRocket;
  }

}
