import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useStaticQuery, graphql } from 'gatsby';
import StatsItem from './StatsItem';

const StatsListWrapper = styled.div`
  padding: 1em;
  padding-top: 0;
`;

const statsQuery = graphql`
  query statsQuery {
    allDataJson {
      edges {
        node {
          stats {
            caption
            counter
            imageUrlDark
            imageUrlLight
          }
        }
      }
    }
  }
`;

const StatsList = () => {
  const themeContext = useContext(ThemeManagerContext);
  const { allDataJson } = useStaticQuery(statsQuery);
  const { stats } = allDataJson.edges[0].node;
  return (
    <StatsListWrapper>
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
    </StatsListWrapper>
  );
};

export default StatsList;
