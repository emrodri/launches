import {Injectable} from '@angular/core';
import {initialState, State} from './models/state.modal';
import {BehaviorSubject} from 'rxjs';
import {Actions, ActionTypes} from './store.actions';
import {storeReducer} from './store.reducer';

@Injectable({
  providedIn: 'root'
})
export class Store {
  private state: State = {...initialState};
  private launches$ = new BehaviorSubject<any[]>(this.state.launches);
  private launchStatuses$ = new BehaviorSubject<any[]>(this.state.launchStatuses);
  private missionTypes$ = new BehaviorSubject<any[]>(this.state.missionTypes);
  private agencies$ = new BehaviorSubject<any[]>(this.state.agencies);

  constructor() {
  }

  public select$ = (slice: Slice) => {
    switch (slice) {
      case Slice.launches:
        return this.launches$.asObservable();
      case Slice.launchStatuses:
        return this.launchStatuses$.asObservable();
      case Slice.agencies:
        return this.agencies$.asObservable();
      case Slice.missionTypes:
        return this.missionTypes$.asObservable();
    }
  };

  public selectSnapShot = (slice: Slice) => {
    switch (slice) {
      case Slice.launches:
        return [...this.state.launches];
      case Slice.launchStatuses:
        return [...this.state.launchStatuses];
      case Slice.agencies:
        return [...this.state.agencies];
      case Slice.missionTypes:
        return [...this.state.missionTypes];
    }
  };

  public dispatch = (action: Actions) => {
    console.log('dispatching...', action);
    this.state = storeReducer(this.state, action);
    switch (action.type) {
      case ActionTypes.LoadLaunches:
        this.launches$.next([...this.state.launches]);
        break;
      case ActionTypes.LoadLaunchStatuses:
        this.launchStatuses$.next([...this.state.launchStatuses]);
        break;
      case ActionTypes.LoadAgencies:
        this.agencies$.next([...this.state.agencies]);
        break;
      case ActionTypes.LoadMissionTypes:
        this.missionTypes$.next([...this.state.missionTypes]);
        break;
    }
  };
}

export enum Slice {
  launches = 'launches',
  launchStatuses = 'launch-statuses',
  missionTypes = 'mission-types',
  agencies = 'agencies'
}
