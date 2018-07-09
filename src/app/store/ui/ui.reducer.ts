import {UiActions, UiActionTypes} from './ui.actions';


export interface UiState {
  loading: boolean;
  newVersion: boolean;
}

export const initialState: UiState = {
  loading: false,
  newVersion: false
};

export function reducer(
  state = initialState,
  action: UiActions): UiState {
  switch (action.type) {
    case UiActionTypes.InitLoading:
      return {...state, loading: true};
    case UiActionTypes.FinishedLoading:
      return {...state, loading: false};
    case UiActionTypes.NewVersionAvailable:
      return {...state, newVersion: true};
    case UiActionTypes.UpdateVersion:
      return state;
    default:
      return state;
  }
}
