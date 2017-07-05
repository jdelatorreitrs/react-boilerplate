/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectTheme } from './selectors';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

export class MThemeProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.props.theme)}>
        {React.Children.only(this.props.children)}
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = createSelector(
  makeSelectTheme(),
  (theme) => ({ theme: theme.toJS() })
);

export default connect(mapStateToProps)(MThemeProvider);
