import API from '../../App/Services/Api'
import FixtureAPI from '../../App/Services/FixtureApi'
import R from 'ramda'

test('All fixtures map to actual API', () => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  // There is no difference between the intersection and all fixtures
  expect(R.equals(fixtureKeys, intersection)).toBe(true)
})

test('FixtureAPI getUsers returns the right file', () => {
  const expectedFile = require('../../App/Fixtures/users.json')

  expect(FixtureAPI.getUsers()).toEqual({
    ok: true,
    data: expectedFile
  })
})

test('FixtureAPI postAuth', () => {
  const okAuthParams = {
    username: 'login',
    password: 'login',
  }
  expect(FixtureAPI.postAuth(okAuthParams)).toEqual({
    ok: true,
    data: 'success'
  })
  const wrongAuthParams = {
    username: '',
    password: '',
  }
  expect(FixtureAPI.postAuth(wrongAuthParams)).toEqual({
    ok: false,
    data: 'wrong username or password'
  })
})

test('FixtureAPI getCards returns the right file', () => {
  const expectedFile = require('../../App/Fixtures/cards.json')

  expect(FixtureAPI.getCards()).toEqual({
    ok: true,
    data: expectedFile
  })
})