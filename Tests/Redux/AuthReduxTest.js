import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/AuthRedux'

test('request', () => {
  const state = reducer(INITIAL_STATE, Actions.authRequest())

  expect(state.fetching).toBe(true)
  expect(state.isAuth).toEqual(false)
  expect(state.error).toBe(false)
})

test('success', () => {
  const state = reducer(INITIAL_STATE, Actions.authSuccess())

  expect(state.fetching).toBe(false)
  expect(state.isAuth).toEqual(true)
  expect(state.error).toBe(false)
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.authFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.isAuth).toEqual(false)
})
