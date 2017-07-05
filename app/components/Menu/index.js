/**
*
* Menu
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Menu() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
