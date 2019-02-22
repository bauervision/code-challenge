// eslint no-console: false
/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS, sendDataFailure } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1,
  username: 'none',
  firstname: 'john',
  lastname: 'doe'
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.SET_LUCKY_NUMBER:
      // Set things in the Redux store
      // Probably could have done this all with one case

      return {
        ...state,
        luckyNumber: action.luckyNumber
      };

    case DISPATCH_ACTIONS.SET_FIRST_NAME:
      return {
        ...state,
        firstname: action.firstname
      };

    case DISPATCH_ACTIONS.SET_LAST_NAME:
      return {
        ...state,
        lastname: action.lastname
      };

    case DISPATCH_ACTIONS.SEND_DATA_FAILURE:
      sendDataFailure();
      return state;

    default:
      return state;
  }
}

export default reducer;
