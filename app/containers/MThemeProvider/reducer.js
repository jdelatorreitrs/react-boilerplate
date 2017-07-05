/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {theme1} from './themes';

import {
  CHANGE_THEME,
} from './constants';

const initialState = fromJS({
  theme: theme1,
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
