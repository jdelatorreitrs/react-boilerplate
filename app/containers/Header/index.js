import React from 'react';
import Button from 'components/Button';
import { connect } from 'react-redux';
import { changeTheme } from 'containers/ThemeProvider/actions';
import { createStructuredSelector } from 'reselect';
import {light, dark} from './themes';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

class Header extends React.Component {
   // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(){
  }

  render() {

    return (
      <div>
        {/*<Button primary>Primary</Button>*/}
        <Button onClick={() =>
          this.props.onChangeTheme(light)}>
          <FormattedMessage {...messages.lightThemeButton} />
        </Button>
        <Button onClick={() =>
          this.props.onChangeTheme(dark)}>
          <FormattedMessage {...messages.darkThemeButton} />
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeTheme: (theme) => dispatch(changeTheme(theme)),
  };
}

const mapStateToProps = createStructuredSelector({});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Header);
