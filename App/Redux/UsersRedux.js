import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  usersRequest: null,
  usersSuccess: ['data'],
  usersFailure: null
})

export const UsersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [],
  fetching: false,
  error: false,
})

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) =>
  state.merge({ fetching: true, error: false, data: [] })

export const success = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: false, data })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true, data: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USERS_REQUEST]: request,
  [Types.USERS_SUCCESS]: success,
  [Types.USERS_FAILURE]: failure
})
