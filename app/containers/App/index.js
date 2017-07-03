/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import PageHeader from 'containers/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import PropTypes from 'prop-types';

const AppWrapper = styled.div`
  padding: 10px;
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  background-color: ${props => props.theme.mainBgColor ? props.theme.mainBgColor : 'transparent' };
`;

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import { getMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as themes from './themes.js'

export class App extends React.Component {

  static childContextTypes = {
    changeTheme: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      muiTheme: getMuiTheme(themes.theme1),
      defaultTheme: true
    };
  }

  getChildContext() {
    return {changeTheme: this.changeTheme};
  }

  changeTheme = () => {
    const theme = this.state.defaultTheme?themes.theme2:themes.theme1;
    this.setState({
      muiTheme: getMuiTheme(theme),
      defaultTheme: !this.state.defaultTheme
    })
  };

  render() {
    return (
      <AppWrapper>
        <MuiThemeProvider muiTheme={this.state.muiTheme}>
          <div>
            <Helmet
              titleTemplate="%s - React.js Boilerplate"
              defaultTitle="React.js Boilerplate"
              meta={[
                { name: 'description', content: 'A React.js Boilerplate application' },
              ]}
            />
            <Header />
            <PageHeader />
            {React.Children.toArray(this.props.children)}
            <Footer />
          </div>
        </MuiThemeProvider>
      </AppWrapper>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
