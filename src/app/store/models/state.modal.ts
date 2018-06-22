import {MissionType, missionTypesInitialState} from './mission-type.model';
import {Agency, agenciesInitialState} from './agency.model';
import {LaunchStatus, launchStatusesInitialState} from './launch-status.model';
import {Launch, launchesInitialState} from './launch.model';

export interface State {
  agencies: Agency[];
  missionTypes: MissionType[];
  launchStatuses: LaunchStatus[];
  launches: Launch[];
}

export const initialState: State = {
  agencies: agenciesInitialState,
  missionTypes: missionTypesInitialState,
  launchStatuses: launchStatusesInitialState,
  launches: launchesInitialState
};
