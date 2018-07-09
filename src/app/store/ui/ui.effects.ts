import {Actions, Effect} from '@ngrx/effects';
import {InitLoading, UiActionTypes, UpdateVersion} from './ui.actions';
import {Injectable} from '@angular/core';
import {map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';


@Injectable()
export class UiEffects {

  @Effect()
  public updateVersion$ = this.actions$
    .ofType(UiActionTypes.UpdateVersion)
    .pipe(
      mergeMap((action: UpdateVersion) => {
        window.location.reload();
        return of(new InitLoading());
      })
    );

  constructor(private actions$: Actions) {
  }
}
