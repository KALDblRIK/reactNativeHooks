import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authRequest: ['params'],
  authSuccess: null,
  authFailure: null
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isAuth: false,
  fetching: false,
  error: false
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, isAuth: false })

// successful api lookup
export const success = (state, action) => {
  return state.merge({ fetching: false, error: false, isAuth: true })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, isAuth: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: request,
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_FAILURE]: failure
})
