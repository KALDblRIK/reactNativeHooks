import { call, put } from 'redux-saga/effects'
import CardsActions from '../Redux/CardsRedux'
// import { CardsSelectors } from '../Redux/CardsRedux'

export function * getCards (api, action) {
  const response = yield call(api.getCards)

  // success?
  if (response.ok) {
    const { data } = response
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(CardsActions.cardsSuccess(data))
  } else {
    yield put(CardsActions.cardsFailure())
  }
}
