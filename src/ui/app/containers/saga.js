/**
 * saga.js
 *
 * This file contains the Saga function used to get data from the
 * service layer. The Saga function injects data into the Redux
 * store via the put function, which takes an action as a parameter.
 *
 * @see https://redux-saga.js.org/
 * @see https://decembersoft.com/posts/changing-react-route-programmatically-with-redux-saga/
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import { DISPATCH_ACTIONS } from './constants';

export function* getLuckyNumber({ username, firstname, lastname }) {
  // dont forget to tag the username onto the path
  const requestUrl = `http://localhost:1337/lucky-number?username=${username}`;

  try {
    // store call result
    const luckyNumber = yield call(request, requestUrl);

    // put our new lucky number where it belongs, and the names
    yield [
      put({ type: DISPATCH_ACTIONS.SET_LUCKY_NUMBER, luckyNumber }),
      put({ type: DISPATCH_ACTIONS.SET_FIRST_NAME, firstname }),
      put({ type: DISPATCH_ACTIONS.SET_LAST_NAME, lastname })
    ];
  } catch (err) {
    // TODO: Bonus points for some error handling
    yield put({ type: 'SEND_DATA_FAILURE', err });
  }
  // be sure to advance to next page to show results to user
  yield put(push('/lucky'));
}

export default function* sagaFunction() {
  yield takeLatest(DISPATCH_ACTIONS.GET_LUCKY_NUMBER, getLuckyNumber);
}
