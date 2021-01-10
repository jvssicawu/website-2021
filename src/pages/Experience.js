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

const ContentWrapper = styled(Content)`
  width: 420px;
  &:not(:last-child) {
    margin-right: 2em;
  }
  b,
  span {
    display: block;
  }
`;

const expQuery = graphql`
  query expQuery {
    allDataJson {
      edges {
        node {
          education {
            date
            description
            title
          }
          experience {
            company
            date
            description
            title
          }
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
      <Row>
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
