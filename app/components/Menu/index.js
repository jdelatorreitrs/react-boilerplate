/**
*
* Menu
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.div`
  padding: 20px;
  width: 200px;
  border-right: 1px solid ${props => props.theme.footerBgColor ? props.theme.footerBgColor : 'rgba(0,0,0, 0.2)' };
`;
