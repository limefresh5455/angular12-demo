import { Action } from "@ngrx/store";
import * as model from "./user.model";
export const actionType = {
  GET_USER_LIST: "[User] Get User List",
  GET_USER_LIST_SUCCESS: "[User] Get User List success",
  GET_USER_LIST_FAIL: "[User] Get User List fail",
  CREATE_USER: '[USER] User',
  CREATE_USER_SUCCESS: '[USER] User Success',
  CREATE_USER_ERROR: '[USER] User Error'
};
export class GetUserListAction implements Action {
  public readonly type = actionType.GET_USER_LIST;
  constructor(public payload: string) {}
}
export class GetUserListActionSuccess implements Action {
  public readonly type = actionType.GET_USER_LIST_SUCCESS;
  constructor(public payload: model.User[]) {}
}
export class GetUserListActionFail implements Action {
  public readonly type = actionType.GET_USER_LIST_FAIL;
  constructor(public payload: any) {}
}
export class AddUser implements Action {
  readonly type = actionType.CREATE_USER;
  constructor(public payload: model.User[]) {
  }
}

export class AddUserSuccess implements Action {
  readonly type = actionType.CREATE_USER_SUCCESS;
  constructor(public payload: number) {
  }
}

export class AddUserError implements Action {
  readonly type = actionType.CREATE_USER_ERROR;
  constructor(public payload: Error) {
  }
}
export type UserActions = 
GetUserListAction |  
GetUserListActionFail |
GetUserListActionSuccess |
AddUser |
AddUserSuccess |
AddUserError;