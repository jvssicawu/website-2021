import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import SocialLink from './SocialLink';

const LinksWrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  list-style: none;
`;

const SocialLinkList = ({ socials }) => {
  const themeContext = useContext(ThemeManagerContext);
  return (
    <LinksWrapper>
      {socials.map((item) => (
        <SocialLink
          key={item.description}
          description={item.description}
          href={item.href}
          imageUrl={
            themeContext.isDark ? item.imageUrlDark : item.imageUrlLight
          }
        />
      ))}
    </LinksWrapper>
  );
};

export default SocialLinkList;
