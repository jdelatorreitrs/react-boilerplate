import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: ${props => props.theme.fontColor ? props.theme.fontColor : 'rgba(0, 0, 0, 0.5)' };
  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;
