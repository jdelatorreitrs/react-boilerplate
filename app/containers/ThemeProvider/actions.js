/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_THEME,
} from './constants';
import {fromJS} from 'immutable';

export function changeTheme(theme) {
  return {
    type: CHANGE_THEME,
    theme: fromJS(theme),
  };
}
