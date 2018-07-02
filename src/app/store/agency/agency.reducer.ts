import {Agency} from '../models/agency.model';
import {AgencyActions, AgencyActionTypes} from './agency.actions';


export interface AgenciesState {
  agencies: Agency[];
  loading: boolean;
}

export const initialState: AgenciesState = {
  agencies: [],
  loading: false
};

export function reducer(
  state = initialState,
  action: AgencyActions): AgenciesState {
  switch (action.type) {
    case AgencyActionTypes.LoadAgencies:
      return {...state, loading: true};
    case AgencyActionTypes.AgenciesLoaded:
      return {loading: false, agencies: action.payload};
    default:
      return state;
  }
}
