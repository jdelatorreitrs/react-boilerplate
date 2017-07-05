import React from 'react';
import Button from 'components/Button';
import { connect } from 'react-redux';
import { changeTheme } from 'containers/ThemeProvider/actions';
import { createStructuredSelector } from 'reselect';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(){
  }

  render() {

    return (
      <div>
        <h1> Styled Components </h1>
        <Button primary>Primary</Button>
        <Button onClick={() =>
          this.props.onChangeTheme({primaryColor: 'rgb(255, 64, 129)'})}>Theme 1</Button>
        <Button onClick={() =>
          this.props.onChangeTheme({primaryColor: 'rgb(0, 151, 167)'})}>Theme 2</Button>
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
