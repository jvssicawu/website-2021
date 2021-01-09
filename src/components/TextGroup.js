import React from 'react';
import styled from 'styled-components';
import useIsInViewport from 'use-is-in-viewport';
import FadeIn from '../containers/FadeIn';

const TextWrapper = styled(FadeIn)`
  padding: 1em;
  padding-bottom: 0;
`;

const TextGroup = ({ content }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  return (
    <TextWrapper
      ref={targetRef}
      className={isInViewport ? 'visible' : 'hidden'}
    >
      <span>{content.date}</span>
      {!!content.company && <b>{content.company}</b>}
      <b>{content.title}</b>
      <p>{content.description}</p>
    </TextWrapper>
  );
};

export default TextGroup;
