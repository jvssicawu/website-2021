import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../components/Button';
import Link from '../components/Link';
import ParallaxLayers from '../components/ParallaxLayers';
import Section from '../containers/Section';
import Toggle from '../components/Toggle';

const LinkContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
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
    <>
      <Toggle />
      <ParallaxLayers />
      <Section>
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
      </Section>
    </>
  );
};

export default Home;
