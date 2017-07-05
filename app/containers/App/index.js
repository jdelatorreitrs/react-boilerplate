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
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';
import PropTypes from 'prop-types';
import Menu from 'components/Menu';
import Content from 'components/Page';

const AppWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-contents: flex-start;
  flex-direction: column;
  background-color: ${props => props.theme.mainBgColor ? props.theme.mainBgColor : 'transparent' };
`;

const PageWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  min-height: calc(100% - 100px);
  width: 100%;
  justify-contents: flex-start;
  flex-direction: row;
  background-color: ${props => props.theme.mainBgColor ? props.theme.mainBgColor : 'transparent' };
`;

const FooterWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  min-height: 100px;
  width: 100%;
  justify-contents: flex-end;
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
            <Helmet
              titleTemplate="%s - React.js Boilerplate"
              defaultTitle="React.js Boilerplate"
              meta={[
                { name: 'description', content: 'A React.js Boilerplate application' },
              ]}
            />
            <PageWrapper>
              <Menu></Menu>
              <Content>
                {React.Children.toArray(this.props.children)}
              </Content>
            </PageWrapper>
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
      </AppWrapper>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
