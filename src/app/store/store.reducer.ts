import {initialState, State} from './models/state.modal';
import {Actions, ActionTypes} from './store.actions';

export function storeReducer(
  state: State = initialState,
  action: Actions
): State {
  const result = { ...state };
  switch (action.type) {
    case ActionTypes.LoadLaunches:
      result.launches = action.payload;
      break;
    case ActionTypes.LoadLaunchStatuses:
      result.launchStatuses = action.payload;
      break;
    case ActionTypes.LoadAgencies:
      result.agencies = action.payload;
      break;
    case ActionTypes.LoadMissionTypes:
      result.missionTypes = action.payload;
      break;
  }
  return result;
}