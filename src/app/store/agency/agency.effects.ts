import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {ApiService} from '../api.service';
import {map, mergeMap} from 'rxjs/operators';
import {AgenciesLoaded, AgencyActionTypes} from './agency.actions';

@Injectable()
export class AgencyEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(AgencyActionTypes.LoadAgencies)
    .pipe(
      mergeMap(() =>
        this.api
          .getLaunchAgencies$()
          .pipe(map(agencies => new AgenciesLoaded(agencies)))
      )
    );

  constructor(private actions$: Actions, private api: ApiService) {}
}
