import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UsersRedux'

test('request', () => {
  const state = reducer(INITIAL_STATE, Actions.usersRequest())

  expect(state.fetching).toBe(true)
  expect(state.data).toEqual([])
  expect(state.error).toBe(false)
})

// test('success', () => {
//   const avatar = 'http://placekitten.com/200/300'
//   const state = reducer(INITIAL_STATE, Actions.userSuccess(avatar))

//   expect(state.fetching).toBe(false)
//   expect(state.avatar).toBe(avatar)
//   expect(state.error).toBeNull()
// })

// test('failure', () => {
//   const state = reducer(INITIAL_STATE, Actions.userFailure())

//   expect(state.fetching).toBe(false)
//   expect(state.error).toBe(true)
//   expect(state.avatar).toBeNull()
// })
