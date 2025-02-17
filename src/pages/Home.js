import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Biography from '../components/Biography';
import Button from '../components/Button';
import ParallaxLayers from '../components/ParallaxLayers';
import Section from '../containers/Section';
import SocialLinkList from '../components/SocialLinkList';
import Toggle from '../components/Toggle';

const buttonsAndSocialsQuery = graphql`
  query buttonsAndSocialsQuery {
    allDataJson {
      edges {
        node {
          ...SocialsFragment
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
  const { allDataJson } = useStaticQuery(buttonsAndSocialsQuery);
  const { buttons, socials } = allDataJson.edges[0].node;
  return (
    <>
      <Toggle />
      <ParallaxLayers id="home" />
      <Section>
        <Biography />
        <SocialLinkList socials={socials} />
        <Button href={buttons.biography.href} label={buttons.biography.label} />
      </Section>
    </>
  );
};

export default Home;
