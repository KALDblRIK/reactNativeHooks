import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { postAuth } from '../../App/Sagas/AuthSagas'
import AuthActions, { AuthTypes } from '../../App/Redux/AuthRedux'
import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

test('success path', () => {
  const okAuthParams = {
    username: 'login',
    password: 'login',
  }
  const response = FixtureAPI.postAuth(okAuthParams)
  const step = stepper(postAuth(FixtureAPI, { params: okAuthParams }))
  // first step API
  step()
  // Second step successful return
  const stepResponse = step(response)
  // Get the avatar Url from the response
  expect(stepResponse).toEqual(put(AuthActions.authSuccess()))
})

test('failure path', () => {
  const response = {ok: false}
  const step = stepper(postAuth(FixtureAPI, { params: {}}))
  // first step API
  step()
  // Second step failed response
  expect(step(response)).toEqual(put(AuthActions.authFailure()))
})
