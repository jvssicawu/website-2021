import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.0rem;
    font-weight: 300;
    font-family: 'Solway', Helvetica, serif;
    h1 {
      font-weight: 500;
    }
  }
  body {
    background-color: ${(props) => props.theme.global.bg};
    color: ${(props) => props.theme.global.color};
    overflow-x: hidden;
    margin: 0;
  }
  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.global.bg};
  }
`;

export default GlobalStyle;
