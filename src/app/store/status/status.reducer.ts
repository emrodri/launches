import {StatusActions, StatusActionTypes} from './status.actions';
import {LaunchStatus} from '../models/launch-status.model';


export interface StatusesState {
  statuses: LaunchStatus[];
  loading: boolean;
}

export const initialState: StatusesState = {
  statuses: [],
  loading: false
};

export function reducer(
  state = initialState,
  action: StatusActions): StatusesState {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
      return {...state, loading: true};
    case StatusActionTypes.StatusesLoaded:
      return {statuses: action.payload, loading: false};
    default:
      return state;
  }
}
