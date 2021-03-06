import {Action} from '@ngrx/store';

export enum UiActionTypes {
  InitLoading = '[UI] Init Loading',
  FinishedLoading = '[UI] Finished Loading',
  NewVersionAvailable = '[UI] New Version',
  UpdateVersion = '[UI] Update Version',
  ChangeTitle = '[UI] Change Title'
}

export class InitLoading implements Action {
  readonly type = UiActionTypes.InitLoading;
}

export class FinishedLoading implements Action {
  readonly type = UiActionTypes.FinishedLoading;
}

export class NewVersionAvailable implements Action {
  readonly type = UiActionTypes.NewVersionAvailable;
}

export class UpdateVersion implements Action {
  readonly type = UiActionTypes.UpdateVersion;
}

export class ChangeTitle implements Action {
  readonly type = UiActionTypes.ChangeTitle;

  constructor(readonly payload: string) {
  }
}

export type UiActions =
  InitLoading
  | FinishedLoading
  | NewVersionAvailable
  | UpdateVersion
  | ChangeTitle;
