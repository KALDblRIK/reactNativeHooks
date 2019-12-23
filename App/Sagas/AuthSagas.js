import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions, { clear } from '../Redux/AuthRedux'
import FixtureAPI from '../../App/Services/FixtureApi'

export function * postAuth (api, action) {
  // make the call to the api
  const { params } = action
  // const response = yield call(FixtureAPI.postAuth(params))
  const response = yield call(FixtureAPI.postAuth, params)

  if (response.ok) {
    const { data } = response
    // do data conversion here if needed
    yield put(AuthActions.authSuccess(data))
  } else {
    yield put(AuthActions.authFailure())
  }
}

export function * clearAuth (action) {
  yield put(AuthActions.authClear())
}