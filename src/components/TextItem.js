import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
  padding: 1em;
  padding-bottom: 0;
`;

const TextItem = ({ content }) => (
  <TextWrapper>
    <span>{content.date}</span>
    {!!content.company && <b>{content.company}</b>}
    <b>{content.title}</b>
    <p>{content.description}</p>
  </TextWrapper>
);

export default TextItem;
