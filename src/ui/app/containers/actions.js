/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export const getLuckyNumber = (username) => ({
  type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
  username
});
