import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Store} from '../store/store.state';
import {LoadAgencies, LoadLaunches, LoadLaunchStatuses, LoadMissionTypes} from '../store/store.actions';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  initialDataLoaded = new BehaviorSubject<boolean>(false);
  private launchesLoaded: boolean;
  private agenciesLoaded: boolean;
  private missionTypesLoaded: boolean;
  private launchStatusesLoaded: boolean;

  constructor(private http: HttpClient, private store: Store) {
  }

  public getLaunches = (): Observable<any[]> => {
    return this.http
      .get('assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches),
        tap(launches => {
          this.store.dispatch(new LoadLaunches(launches));
          this.launchesLoaded = true;
          this.checkLoaded();
        })
      );
  };

  public getLaunchStatutuses = (): Observable<any[]> => {
    return this.http
      .get('assets/launchstatus.json')
      .pipe(
        map((res: any) => res.types),
        tap(res => {
          this.store.dispatch(new LoadLaunchStatuses(res));
          this.launchStatusesLoaded = true;
          this.checkLoaded();
        })
      );
  };

  public getLaunchMissions = (): Observable<any[]> => {
    return this.http
      .get('assets/launchmissions.json')
      .pipe(
        map((res: any) => res.types),
        tap(res => {
          this.store.dispatch(new LoadMissionTypes(res));
          this.missionTypesLoaded = true;
          this.checkLoaded();
        })
      );
  };

  public getLaunchAgencies = (): Observable<any[]> => {
    return this.http
      .get('assets/launchagencies.json')
      .pipe(
        map((res: any) => res.agencies),
        tap(res => {
          this.store.dispatch(new LoadAgencies(res));
          this.agenciesLoaded = true;
          this.checkLoaded();
        })
      );
  };

  private checkLoaded() {
    if (
      this.launchesLoaded &&
      this.launchStatusesLoaded &&
      this.missionTypesLoaded &&
      this.agenciesLoaded
    ) {
      this.initialDataLoaded.next(true);
    } else {
      this.initialDataLoaded.next(false);
    }
  }

  loadInitialData() {
    this.getLaunches().subscribe(_ => this.checkLoaded());
    this.getLaunchAgencies().subscribe(_ => this.checkLoaded());
    this.getLaunchStatutuses().subscribe(_ => this.checkLoaded());
    this.getLaunchMissions().subscribe(_ => this.checkLoaded());
  }
}
