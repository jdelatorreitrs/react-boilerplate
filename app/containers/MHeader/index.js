
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { changeTheme } from 'containers/MThemeProvider/actions';
import { createStructuredSelector } from 'reselect';
import { theme1, theme2 } from 'containers/MThemeProvider/themes';

class MHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1> Material UI Components </h1>
          <RaisedButton label="Primary" primary={true} />
          <RaisedButton label="Theme 1" onTouchTap={() =>
            this.props.onChangeTheme(theme1)} />
          <RaisedButton label="Theme 2" onTouchTap={() =>
            this.props.onChangeTheme(theme2)} />
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
export default connect(mapStateToProps, mapDispatchToProps)(MHeader);
