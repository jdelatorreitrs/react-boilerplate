/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CHANGE_THEME,
} from './constants';

const initialState = fromJS({
  theme: {btnPrimaryColor: 'red', mainBgColor: 'rgba(0, 0, 0, 0.1)'},
});

function themeProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return state.set('theme', action.theme);
    default:
      return state;
  }
}

export default themeProviderReducer;
