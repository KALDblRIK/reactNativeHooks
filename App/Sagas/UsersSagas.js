import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import UsersActions from '../Redux/UsersRedux'

export function * getUsers (api, action) {
  // make the call to the api
  const response = yield call(api.getUsers)

  if (response.ok) {
    const { data } = response
    // do data conversion here if needed
    yield put(UsersActions.usersSuccess(data))
  } else {
    yield put(UsersActions.usersFailure())
  }
}
