import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Section from '../containers/Section';
import Content from '../containers/Content';
import Row from '../containers/Row';
import StatsItem from '../components/StatsItem';
import TextItem from '../components/TextItem';

const TextContent = styled(Content)`
  width: 420px;
  &:not(:last-child) {
    margin-right: 2em;
  }
  b,
  span {
    display: block;
  }
`;

const StatsWrapper = styled.div`
  padding: 1em;
  padding-bottom: 0;
`;

const expQuery = graphql`
  query expQuery {
    allDataJson {
      edges {
        node {
          stats {
            caption
            counter
            imageUrlDark
            imageUrlLight
          }
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
  const themeContext = useContext(ThemeManagerContext);
  const { allDataJson } = useStaticQuery(expQuery);
  const { stats, education, experience } = allDataJson.edges[0].node;
  return (
    <Section>
      <Header>Education & Experience</Header>
      <Row>
        <TextContent>
          <TextItem content={education} />
          <StatsWrapper>
            {stats.map((item) => (
              <StatsItem
                key={item.counter}
                caption={item.caption}
                counter={item.counter}
                imageUrl={
                  themeContext.isDark ? item.imageUrlDark : item.imageUrlLight
                }
              />
            ))}
          </StatsWrapper>
        </TextContent>
        <TextContent>
          {experience.map((item) => (
            <TextItem content={item} />
          ))}
        </TextContent>
      </Row>
      <Header>Recent Highlights</Header>
    </Section>
  );
};

export default Experience;
