import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import useIsInViewport from 'use-is-in-viewport';
import { useStaticQuery, graphql } from 'gatsby';
import CountUp from 'react-countup';
import FadeIn from '../containers/FadeIn';

const StatsItemWrapper = styled(FadeIn)`
  align-items: center;
  display: flex;
  p {
    margin: 0;
  }
`;

const StatsWrapper = styled.div`
  padding: 1em;
  padding-top: 0;
`;

const Column = styled.div`
  margin-left: 1em;
  & > span {
    color: ${(props) => props.theme.colorPalette.black};
  }
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

const StatsItem = ({ caption, counter, imageUrl }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  return (
    <StatsItemWrapper
      ref={targetRef}
      className={isInViewport ? 'visible' : 'hidden'}
    >
      <img src={imageUrl} alt={caption} />
      <Column>
        {isInViewport && <CountUp start={0} end={counter} />}
        <p>{caption}</p>
      </Column>
    </StatsItemWrapper>
  );
};

const Stats = () => {
  const themeContext = useContext(ThemeManagerContext);
  const { allDataJson } = useStaticQuery(statsQuery);
  const { stats } = allDataJson.edges[0].node;
  return (
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
  );
};

export default Stats;
