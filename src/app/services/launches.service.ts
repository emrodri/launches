import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  launches: any[];
  launchStatuses: any[];
  launchMissions: any[];
  launchAgencies: any[];
  initialDataLoaded = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  public getLaunches = (): Observable<any[]> => {
    if (this.launches) {
      return of(this.launches);
    }
    return this.http
      .get('assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches),
        tap(res => {
          (this.launches = res);
          this.checkLoaded();
        })
      );
  };

  public getLaunchStatutuses = (): Observable<any[]> => {
    if (this.launchStatuses) {
      return of(this.launchStatuses);
    }
    return this.http
      .get('assets/launchstatus.json')
      .pipe(
        map((res: any) => res.types),
        tap(res => {
          (this.launchStatuses = res);
          this.checkLoaded();
        })
      );
  };

  public getLaunchMissions = (): Observable<any[]> => {
    if (this.launchMissions) {
      return of(this.launchMissions);
    }
    return this.http
      .get('assets/launchmissions.json')
      .pipe(
        map((res: any) => res.types),
        tap(res => {
          (this.launchMissions = res);
          this.checkLoaded();
        })
      );
  };

  public getLaunchAgencies = (): Observable<any[]> => {
    if (this.launchAgencies) {
      return of(this.launchAgencies);
    }
    return this.http
      .get('assets/launchagencies.json')
      .pipe(
        map((res: any) => res.agencies),
        tap(res => {
          (this.launchAgencies = res);
          this.checkLoaded();
        })
      );
  };

  private checkLoaded() {
    if (
      this.launches &&
      this.launchStatuses &&
      this.launchMissions &&
      this.launchAgencies
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
