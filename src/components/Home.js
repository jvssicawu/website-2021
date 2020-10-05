import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './Link';

const SectionContainer = styled.div`
  margin: auto;
  text-align: center;
  position: relative;
  z-index: 1;
  h1 {
    font-size: 24px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  img {
    border-style: none;
    margin-bottom: 0.5rem;
  }
  span {
    color: #f37777;
  }
`;

const LinkContainer = styled.div`
  margin-top: 1rem;
  list-style: none;
`;

const socialLinksQuery = graphql`
  query socialLinksQuery {
    allSocialLinkItemsJson {
      edges {
        node {
          description
          href
          imageUrlDark
          imageUrlLight
        }
      }
    }
  }
`;

const Home = () => {
  const themeContext = useContext(ThemeManagerContext);
  const { allSocialLinkItemsJson } = useStaticQuery(socialLinksQuery);
  return (
    <SectionContainer>
      <img src="assets/profilePic.svg" alt="Jess" />
      <h1>Jessica Wu</h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <span>Hi, I'm a developer!</span>
      <LinkContainer>
        {allSocialLinkItemsJson.edges.map((item) => (
          <Link
            description={item.node.description}
            href={item.node.href}
            imageUrl={
              themeContext.isDark
                ? item.node.imageUrlDark
                : item.node.imageUrlLight
            }
          />
        ))}
      </LinkContainer>
    </SectionContainer>
  );
};

export default Home;
