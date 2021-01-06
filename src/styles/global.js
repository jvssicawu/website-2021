/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Solway:wght@400;500;700&display=swap');
    font-family: 'Solway', Helvetica, serif;
  }
  html {
    font-size: 1.1rem;
  }
  body {
    background-color: ${(props) => props.theme.global.bg};
    color: ${(props) => props.theme.global.color}
  }
  section#home {
    height: 100vh;
    min-height: 100vh;
    align-items: center;
    display: flex;
  }
`;

export default GlobalStyle;
