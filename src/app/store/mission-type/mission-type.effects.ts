import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {ApiService} from '../api.service';
import {map, mergeMap} from 'rxjs/operators';
import {MissionTypeActionTypes, MissionTypesLoaded} from './mission-type.actions';


@Injectable()
export class MissionTypeEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(MissionTypeActionTypes.LoadMissionTypes)
    .pipe(
      mergeMap(() =>
        this.api
          .getLaunchMissions$()
          .pipe(map(missionTypes => new MissionTypesLoaded(missionTypes)))
      )
    );

  constructor(private actions$: Actions, private api: ApiService) {}
}
