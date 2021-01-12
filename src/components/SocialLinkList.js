import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import SocialLink from './SocialLink';

const LinksWrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  list-style: none;
`;

export const socialsQuery = graphql`
  fragment SocialsFragment on DataJson {
    socials {
      description
      href
      imageUrlDark
      imageUrlLight
    }
  }
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
