// @flow

export type Action =
    { type: 'FIRST' }
  | { type: 'SECOND' }

export type Dispatch = (action: Action | ThunkAction | PromiseAction | APIAction | Array<Action>) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type PromiseAction = Promise<Action>
export type APIAction = Object
