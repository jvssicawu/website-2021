import React, { useContext } from 'react';
import styled, { withTheme } from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { GlobalStyle } from '../styles/global';
import Home from '../components/Home';

const PageWrapper = styled.div`
  display: block;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: ${(props) => props.theme.global.color};
    margin: 8px;
  }
`;

const Main = withTheme((props) => {
  const { theme } = props;
  const themeContext = useContext(ThemeManagerContext);
  return (
    <PageWrapper>
      <GlobalStyle theme={theme} />
      <ToggleWrapper>
        <input
          type="checkbox"
          onChange={() => themeContext.toggleDark()}
          checked={themeContext.isDark}
        />
        <span>Enable Dark Mode</span>
      </ToggleWrapper>
      <main className="content">
        {/* Home */}
        <section id="home">
          <Home />
        </section>
      </main>
    </PageWrapper>
  );
});

export default Main;
