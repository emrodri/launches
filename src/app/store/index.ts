import {
  ActionReducerMap,
  MetaReducer, StoreModule
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromAgency from './agency/agency.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromMissionType from './mission-type/mission-type.reducer';
import * as fromUi from './ui/ui.reducer';

export interface State {

  launches: fromLaunch.LaunchesState;
  agencies: fromAgency.AgenciesState;
  statuses: fromStatus.StatusesState;
  missionTypes: fromMissionType.MissionTypesState;
  ui: fromUi.UiState;
}

export const reducers: ActionReducerMap<State> = {
  launches: fromLaunch.reducer,
  agencies: fromAgency.reducer,
  statuses: fromStatus.reducer,
  missionTypes: fromMissionType.reducer,
  ui: fromUi.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
