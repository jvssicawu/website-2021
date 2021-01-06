import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';
import Button from './Button';
import Link from './Link';

const SectionContainer = styled.div`
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.0rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  img {
    border-style: none;
    margin-bottom: 0.5rem;
  }
  span {
    color: ${(props) => props.theme.colorPalette.primaryButton};
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
      <span>Hi, I&apos;m a developer!</span>
      <LinkContainer>
        {allSocialLinkItemsJson.edges.map((item) => (
          <Link
            key={item.node.description}
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
      <Button
        href="https://drive.google.com/file/d/1Q1sDxxgvIbdiEvTbR0Xxzjjm99fjHjLq/view?usp=sharing"
        label="Hire me! :)"
      />
    </SectionContainer>
  );
};

export default Home;
