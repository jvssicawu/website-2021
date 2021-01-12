import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Section from '../containers/Section';
import ParallaxLayers from '../components/ParallaxLayers';

const TextWrapper = styled.h3`
  font-weight: 300;
  color: ${(props) => props.theme.colorPalette.red};
  a {
    color: ${(props) => props.theme.global.color};
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.colorPalette.red};
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;

const contactQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          contact {
            link {
              href
              label
            }
            part1
            part2
          }
        }
      }
    }
  }
`;

const Contact = () => {
  const { allDataJson } = useStaticQuery(contactQuery);
  const { contact } = allDataJson.edges[0].node;
  return (
    <>
      <ParallaxLayers id="contact" />
      <Section>
        <Header>Have a Question?</Header>
        <TextWrapper>
          {contact.part1}
          <a href={contact.link.href} target="_blank" rel="noopener noreferrer">
            {contact.link.label}
          </a>
          {contact.part2}
        </TextWrapper>
      </Section>
    </>
  );
};

export default Contact;
