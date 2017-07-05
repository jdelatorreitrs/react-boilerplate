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

import HeaderParent from './HeaderParent';
import MateriaUIHeader from 'containers/MHeader';
import StyledComponentsHeader from 'containers/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import PropTypes from 'prop-types';
import MThemeProvider from 'containers/MThemeProvider';

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

export class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppWrapper>
      <MThemeProvider>
          <div>
            <Helmet
              titleTemplate="%s - React.js Boilerplate"
              defaultTitle="React.js Boilerplate"
              meta={[
                { name: 'description', content: 'A React.js Boilerplate application' },
              ]}
            />
            <HeaderParent>
              <MateriaUIHeader />
            </HeaderParent>
            <HeaderParent>
              <StyledComponentsHeader />
            </HeaderParent>

            {React.Children.toArray(this.props.children)}
            <Footer />
          </div>
        </MThemeProvider>
      </AppWrapper>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
