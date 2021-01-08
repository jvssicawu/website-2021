import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Section from '../containers/Section';
import Content from '../containers/Content';
import Row from '../containers/Row';
import StatsItem from '../components/StatsItem';

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

const Group = styled.div`
  padding: 1em;
  padding-bottom: 0;
`;

const statsQuery = graphql`
  query statsQuery {
    allStatsItemsJson {
      edges {
        node {
          caption
          counter
          imageUrlDark
          imageUrlLight
        }
      }
    }
  }
`;

const Experience = () => {
  const themeContext = useContext(ThemeManagerContext);
  const { allStatsItemsJson } = useStaticQuery(statsQuery);
  return (
    <Section>
      <Header>Education & Experience</Header>
      <Row>
        <TextContent>
          <Group>
            <span>Sep 2016 - May 2021</span>
            <b>University of British Columbia</b>
            <p>Bachelor of Science, Major in Computer Science</p>
          </Group>
          <Group>
            {allStatsItemsJson.edges.map((item) => (
              <StatsItem
                key={item.node.counter}
                caption={item.node.caption}
                counter={item.node.counter}
                imageUrl={
                  themeContext.isDark
                    ? item.node.imageUrlDark
                    : item.node.imageUrlLight
                }
              />
            ))}
          </Group>
        </TextContent>
        <TextContent>
          <Group>
            <span>May 2020 - Jan 2021</span>
            <b>SAP</b>
            <b>iXp Agile Developer Intern</b>
            <p>
              Implemented geospatial query optimization that persists queries in
              a central place for performance gain. Shipped high-priority
              JavaScript bug fixes and wrote automation to maintain quality.
            </p>
          </Group>
          <Group>
            <span>Sep 2019 - Apr 2020</span>
            <b>Hootsuite</b>
            <b>Software Developer Co-op</b>
            <p>
              Crushed bugs in PHP, refactored Scala backend code, implemented
              front-end React features and an endpoint in Go, and led an API
              migration project for my team’s features.
            </p>
          </Group>
        </TextContent>
      </Row>
      <Header>Recent Highlights</Header>
    </Section>
  );
};

export default Experience;
