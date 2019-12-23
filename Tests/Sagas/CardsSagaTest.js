import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { getCards } from '../../App/Sagas/CardsSagas'
import CardsActions from '../../App/Redux/CardsRedux'
import { path } from 'ramda'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', () => {
  const step = stepper(getCards(FixtureAPI))
  // first yield is API
  expect(step()).toEqual(call(FixtureAPI.getCards))
})

test('success path', () => {
  const response = FixtureAPI.getCards()
  const step = stepper(getCards(FixtureAPI))
  // first step API
  step()
  // Second step successful return
  const stepResponse = step(response)
  // Get the avatar Url from the response
  const { data } = response
  expect(stepResponse).toEqual(put(CardsActions.cardsSuccess(data)))
})

test('failure path', () => {
  const response = {ok: false}
  const step = stepper(getCards(FixtureAPI))
  // first step API
  step()
  // Second step failed response
  expect(step(response)).toEqual(put(CardsActions.cardsFailure()))
})
