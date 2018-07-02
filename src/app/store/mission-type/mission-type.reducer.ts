import {Action} from '@ngrx/store';
import {MissionType} from '../models/mission-type.model';
import {MissionTypeActions, MissionTypeActionTypes} from './mission-type.actions';


export interface MissionTypesState {
  missionTypes: MissionType[];
  loading: boolean;
}

export const initialState: MissionTypesState = {
  missionTypes: [],
  loading: false
};

export function reducer(
  state = initialState,
  action: MissionTypeActions): MissionTypesState {
  switch (action.type) {
    case MissionTypeActionTypes.LoadMissionTypes:
      return {...state, loading: true};
    case MissionTypeActionTypes.MissionTypesLoaded:
      return {loading: false, missionTypes: action.payload};
    default:
      return state;
  }
}
