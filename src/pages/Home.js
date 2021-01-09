import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';
import Biography from '../components/Biography';
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

const socialsAndButtonQuery = graphql`
  query socialsAndButtonQuery {
    allDataJson {
      edges {
        node {
          socials {
            description
            href
            imageUrlDark
            imageUrlLight
          }
          buttons {
            biography {
              href
              label
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const themeContext = useContext(ThemeManagerContext);
  const { allDataJson } = useStaticQuery(socialsAndButtonQuery);
  const { socials, buttons } = allDataJson.edges[0].node;
  return (
    <>
      <Toggle />
      <ParallaxLayers />
      <Section>
        <Biography />
        <LinkContainer>
          {socials.map((item) => (
            <Link
              key={item.description}
              description={item.description}
              href={item.href}
              imageUrl={
                themeContext.isDark ? item.imageUrlDark : item.imageUrlLight
              }
            />
          ))}
        </LinkContainer>
        <Button href={buttons.biography.href} label={buttons.biography.label} />
      </Section>
    </>
  );
};

export default Home;
