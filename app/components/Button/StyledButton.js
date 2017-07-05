import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const StyledButton = styled.button`
${buttonStyles}
background-color: ${props => props.primary && props.theme && props.theme.primaryColor ? props.theme.primaryColor : 'rgb(0, 151, 167)'};
border: 2px solid ${props => props.primary && props.theme && props.theme.primaryColor ? props.theme.primaryColor : 'rgb(0, 151, 167)'};
`;

export default StyledButton;
