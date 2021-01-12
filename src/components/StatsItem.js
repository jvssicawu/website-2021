import React from 'react';
import styled from 'styled-components';
import useIsInViewport from 'use-is-in-viewport';
import CountUp from 'react-countup';
import FadeIn from '../containers/FadeIn';

const StatsItemWrapper = styled(FadeIn)`
  align-items: center;
  display: flex;
  p {
    margin: 0;
  }
`;

const Column = styled.div`
  margin-left: 1em;
  p {
    padding: 0;
  }
  & > span {
    color: ${(props) => props.theme.colorPalette.black};
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

export default StatsItem;
