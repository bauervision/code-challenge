/**
 * constants.js
 *
 * This file contains some constants used in the Redux infrastructure.
 * It facilitates the centralization of the key values.
 */

export const CONTAINER_KEY = 'code-challenge/welcome';

// TODO: Add more action constants if needed
export const DISPATCH_ACTIONS = {
  GET_LUCKY_NUMBER: 'GET_LUCKY_NUMBER',
  SET_LUCKY_NUMBER: 'SET_LUCKY_NUMBER',
  SET_FIRST_NAME: 'SET_FIRST_NAME',
  SET_LAST_NAME: 'SET_LAST_NAME',

  SEND_DATA_FAILURE: 'SEND_DATA_FAILURE'
};

export function sendDataFailure(err) {
  return {
    type: DISPATCH_ACTIONS.SEND_DATA_FAILURE,
    payload: err,
    error: true
  };
}
