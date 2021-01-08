import React from 'react';
import styled from 'styled-components';
import useIsInViewport from 'use-is-in-viewport';
import CountUp from 'react-countup';

const StatsWrapper = styled.div`
  align-items: center;
  display: flex;
  p {
    margin: 0;
  }
  -webkit-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  -moz-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  -o-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  &.hidden {
    will-change: opacity;
    opacity: 0;
    -webkit-transform: translateY(5vh);
    -moz-transform: translateY(5vh);
    -o-transform: translateY(5vh);
    transform: translateY(5vh);
  }
  &.visible {
    opacity: 1;
    transform: none;
  }
`;

const Column = styled.div`
  margin-left: 1em;
  span {
    color: ${(props) => props.theme.colorPalette.black};
  }
`;

const StatsItem = ({ caption, counter, imageUrl }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  return (
    <StatsWrapper
      ref={targetRef}
      className={isInViewport ? 'visible' : 'hidden'}
    >
      <img src={imageUrl} alt={caption} />
      <Column>
        {isInViewport && <CountUp start={0} end={counter} />}
        <p>{caption}</p>
      </Column>
    </StatsWrapper>
  );
};

export default StatsItem;
