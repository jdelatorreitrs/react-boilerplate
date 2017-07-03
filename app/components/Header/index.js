import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Button from 'components/Button';
import Img from './Img';
import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const style = {
  margin: 12,
};
const styles = {
  block: {
    maxWidth: 100,
  },
  toggle: {
    marginBottom: 16,
  },
}

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static contextTypes = {
    changeTheme: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        {/* <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar> */}
        <NavBar>
          <Link to="/">
            <RaisedButton style={style}>
              <FormattedMessage {...messages.home} />
            </RaisedButton>
          </Link>
          <Link to="/features">
            <RaisedButton style={style}>
              <FormattedMessage {...messages.features} />
            </RaisedButton>
          </Link>
          <RaisedButton label="Primary" primary={true} style={style} />
          <RaisedButton label="Secondary" secondary={true} style={style} />
          <RaisedButton label="Disabled" disabled={true} style={style} />
          <Button>Primary</Button>
          <div style={styles.block}>
            <Toggle
              label="Theme"
              style={styles.toggle}
              onToggle={this.context.changeTheme}
            />
          </div>
        </NavBar>
      </div>
    );
  }
}

export default Header;
