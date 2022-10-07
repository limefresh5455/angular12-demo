import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Effect, EffectsModule, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import * as actions from "./user.action";
import { UserService } from "./user.service";
@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private ser: UserService) {}
  @Effect()
  getUserList$: Observable<Action> = 
    this.actions$.pipe(
      ofType(actions.actionType.GET_USER_LIST),
      switchMap(() => {
        return this.ser.getUserList().pipe(
            map(rep=>{
                return new actions.GetUserListActionSuccess(rep);
            }),
            catchError(err=>{
                throw err;
                })
    )}));

  // @Effect()
  // createUser$ = this.actions$.pipe(
  //   ofType(actions.actionType.CREATE_USER),
  //   map((action: actions.AddUser) => action.payload),
  //   switchMap(newGame => this.ser.insert(newGame)),
  //   map((response) => new actions.AddUserSuccess(response.id)),
  //   catchError((err) => [new actions.AddUserError(err)])
  // );
}
