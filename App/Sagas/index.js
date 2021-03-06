import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { UsersTypes } from '../Redux/UsersRedux'
import { AuthTypes } from '../Redux/AuthRedux'
import { CardsTypes } from '../Redux/CardsRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUsers } from './UsersSagas'
import { postAuth, clearAuth } from './AuthSagas'
import { getCards } from './CardsSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(UsersTypes.USERS_REQUEST, getUsers, api),
    takeLatest(AuthTypes.AUTH_REQUEST, postAuth, api),
    takeLatest(CardsTypes.CARDS_REQUEST, getCards, api),
  ])
}
