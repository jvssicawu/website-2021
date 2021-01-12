import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Section from '../containers/Section';
import AboutMe from '../components/AboutMe';
import Passions from '../components/Passions';

const aboutQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          ...BioFragment
          ...ButtonFragment
          ...PassionsFragment
        }
      }
    }
  }
`;

const About = () => {
  const { allDataJson } = useStaticQuery(aboutQuery);
  const { passions, biography, buttons } = allDataJson.edges[0].node;
  return (
    <Section>
      <Header>About Me</Header>
      <AboutMe biography={biography} buttons={buttons} />
      <Header>Passions</Header>
      <Passions passions={passions} />
    </Section>
  );
};

export default About;
