import {Launch} from './models/launch.model';
import {LaunchStatus} from './models/launch-status.model';
import {Agency} from './models/agency.model';
import {MissionType} from './models/mission-type.model';

export enum ActionTypes {
  LoadLaunches = '[Global] LoadLaunches',
  LoadLaunchStatuses = '[Global] LoadLaunchStatuses',
  LoadAgencies = '[Global] LoadAgencies',
  LoadMissionTypes = '[Global] LoadMissionTypes'
}

export interface Action {
  readonly type: ActionTypes;
  readonly payload: any;
}

export class LoadLaunches implements Action {
  public readonly type = ActionTypes.LoadLaunches;

  constructor(public readonly payload: Launch[]) {
  }
}

export class LoadLaunchStatuses implements Action {
  public readonly type = ActionTypes.LoadLaunchStatuses;

  constructor(public readonly payload: LaunchStatus[]) {
  }
}

export class LoadAgencies implements Action {
  public readonly type = ActionTypes.LoadAgencies;

  constructor(public readonly payload: Agency[]) {
  }
}

export class LoadMissionTypes implements Action {
  public readonly type = ActionTypes.LoadMissionTypes;

  constructor(public readonly payload: MissionType[]) {
  }
}

export type Actions = LoadLaunches | LoadLaunchStatuses | LoadAgencies | LoadMissionTypes;
