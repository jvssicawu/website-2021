import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Section from '../containers/Section';
import Content from '../containers/Content';
import Projects from '../components/Projects';
import Row from '../containers/Row';
import StatsList from '../components/StatsList';
import TextGroup from '../components/TextGroup';
import Device from '../constants.js/Device';

const ContentWrapper = styled(Content)`
  width: 100%;
  margin-bottom: 2em;
  b,
  span {
    display: block;
  }
  @media ${Device.tablet} {
    &:not(:last-child) {
      margin-right: 2em;
    }
  }
`;

const expQuery = graphql`
  query expQuery {
    allDataJson {
      edges {
        node {
          ...EducationFragment
          ...ExperienceFragment
        }
      }
    }
  }
`;

const Experience = () => {
  const { allDataJson } = useStaticQuery(expQuery);
  const { education, experience } = allDataJson.edges[0].node;
  return (
    <Section>
      <Header>Education & Experience</Header>
      <Row className="experience">
        <ContentWrapper>
          <TextGroup content={education} />
          <StatsList />
        </ContentWrapper>
        <ContentWrapper>
          {experience.map((item) => (
            <TextGroup key={item.title} content={item} />
          ))}
        </ContentWrapper>
      </Row>
      <Header>Recent Projects</Header>
      <Projects />
    </Section>
  );
};

export default Experience;
