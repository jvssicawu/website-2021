/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Solway', Helvetica, serif;
    font-size: 16px;
  }
  body {
    background-color: ${(props) => props.theme.global.bg};
    color: ${(props) => props.theme.global.color}
  }
  section#home {
    height: 100vh;
    min-height: 100vh;
    position: relative;
    align-items: center;
    display: flex;
  }
`;

export default GlobalStyle;
