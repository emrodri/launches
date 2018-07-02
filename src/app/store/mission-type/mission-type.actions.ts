import {Action} from '@ngrx/store';

export enum MissionTypeActionTypes {
  LoadMissionTypes = '[MissionType] Load MissionTypes',
  MissionTypesLoaded = '[MissionType] MissionTypes Loaded'
}

export class LoadMissionTypes implements Action {
  readonly type = MissionTypeActionTypes.LoadMissionTypes;
}

export class MissionTypesLoaded implements Action {
  readonly type = MissionTypeActionTypes.MissionTypesLoaded;
  constructor(readonly payload: any[]) {}
}

export type MissionTypeActions = LoadMissionTypes | MissionTypesLoaded;
