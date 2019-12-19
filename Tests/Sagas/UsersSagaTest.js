import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { getUsers } from '../../App/Sagas/UsersSagas'
import UsersActions from '../../App/Redux/UsersRedux'
import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', () => {
  const step = stepper(getUsers(FixtureAPI))
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getUsers))
})

test('success path', () => {
  const response = FixtureAPI.getUsers()
  const step = stepper(getUsers(FixtureAPI))
  // first step API
  step()
  // Second step successful return
  const stepResponse = step(response)
  // Get the avatar Url from the response
  const { data } = response
  expect(stepResponse).toEqual(put(UsersActions.usersSuccess(data)))
})

test('failure path', () => {
  const response = {ok: false}
  const step = stepper(getUsers(FixtureAPI))
  // first step API
  step()
  // Second step failed response
  expect(step(response)).toEqual(put(UsersActions.usersFailure()))
})
