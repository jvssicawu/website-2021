import React, { useContext } from 'react';
import styled, { withTheme } from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { GlobalStyle } from '../styles/global';

const ToggleWrapper = styled.div`
  padding: 0.5em;
  span {
    color: ${(props) => props.theme.global.color};
    margin: 8px;
  }
`;

const Toggle = withTheme((props) => {
  const { theme } = props;
  const themeContext = useContext(ThemeManagerContext);
  return (
    <ToggleWrapper>
      <GlobalStyle theme={theme} />
      <input
        type="checkbox"
        onChange={() => themeContext.toggleDark()}
        checked={themeContext.isDark}
      />
      <span>Dark Mode</span>
    </ToggleWrapper>
  );
});

export default Toggle;
