import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CardsRedux'

test('request', () => {
  const state = reducer(INITIAL_STATE, Actions.cardsRequest())

  expect(state.fetching).toBe(true)
  expect(state.data).toEqual([])
  expect(state.error).toBe(false)
})

test('success', () => {
  const state = reducer(INITIAL_STATE, Actions.cardsSuccess())

  expect(state.fetching).toBe(false)
  expect(state.data).toEqual(undefined)
  expect(state.error).toBe(false)
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.cardsFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.data).toEqual([])
})
