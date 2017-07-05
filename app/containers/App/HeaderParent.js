/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

export class HeaderParent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(){
  }

  shouldComponentUpdate(){
    return true;
  }

  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default HeaderParent;
