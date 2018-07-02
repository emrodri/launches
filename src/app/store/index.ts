import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromAgency from './agency/agency.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromMissionType from './mission-type/mission-type.reducer';

export interface State {

  launches: fromLaunch.LaunchesState;
  agencies: fromAgency.AgenciesState;
  statuses: fromStatus.StatusesState;
  missionTypes: fromMissionType.MissionTypesState;
}

export const reducers: ActionReducerMap<State> = {
  launches: fromLaunch.reducer,
  agencies: fromAgency.reducer,
  statuses: fromStatus.reducer,
  missionTypes: fromMissionType.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
