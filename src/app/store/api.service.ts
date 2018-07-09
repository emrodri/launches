import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {LoadLaunches} from './launch/launch.actions';
import {State} from './index';
import {Store} from '@ngrx/store';
import {LoadAgencies} from './agency/agency.actions';
import {LoadMissionTypes} from './mission-type/mission-type.actions';
import {LoadStatuses} from './status/status.actions';
import {FinishedLoading, InitLoading} from './ui/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  search$ = new BehaviorSubject<any>(null);
  private entitiesLoaded = [];

  constructor(private http: HttpClient, private store: Store<State>) {
  }

  public getLaunches$ = (): Observable<any[]> => {
    return this.http
      .get('assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches)
      );
  };

  public getLaunchStatutuses$ = (): Observable<any[]> => {
    return this.http
      .get('assets/launchstatus.json')
      .pipe(
        map((res: any) => res.types)
      );
  };

  public getLaunchMissions$ = (): Observable<any[]> => {
    return this.http
      .get('assets/launchmissions.json')
      .pipe(
        map((res: any) => res.types)
      );
  };

  public getLaunchAgencies$ = (): Observable<any[]> => {
    return this.http
      .get('assets/launchagencies.json')
      .pipe(
        map((res: any) => res.agencies)
      );
  };

  private checkInitialDataLoaded() {
    if (
      this.entitiesLoaded['launches'] &&
      this.entitiesLoaded['agencies'] &&
      this.entitiesLoaded['missionTypes'] &&
      this.entitiesLoaded['statuses']
    ) {
      this.store.dispatch(new FinishedLoading);
    }
  }

  loadInitialData() {
    this.store.dispatch(new InitLoading());
    this.store.dispatch(new LoadLaunches());
    this.checkIfLoaded('launches');
    this.store.dispatch(new LoadAgencies());
    this.checkIfLoaded('agencies');
    this.store.dispatch(new LoadMissionTypes());
    this.checkIfLoaded('missionTypes');
    this.store.dispatch(new LoadStatuses());
    this.checkIfLoaded('statuses');

  }

  private checkIfLoaded(path: string) {
    this.store.select(path).subscribe(state => {
      this.entitiesLoaded[path] = (!state.loading && (state[path].length > 0));
      this.checkInitialDataLoaded();
    });
  }

  public searchLaunches(searchValues) {
    this.search$.next(searchValues);
  }
}
