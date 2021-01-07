import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  background: ${(props) => props.theme.colorPalette[props.bgColor]};
  border: none;
  border-radius: 1.5em;
  color: ${(props) => props.theme.colorPalette.black};
  padding: 1.5em;
  padding-bottom: 0.5em;
  margin: 1em;
  text-align: center;
  width: 250px;
  span {
    font-weight: 500;
  }
  h3 {
    margin-bottom: 0;
  }
  img {
    background: url(${(props) => props.bgImageUrl}) center center no-repeat;
    background-size: auto 100%;
  }
`;

// eslint-disable-next-line object-curly-newline
const Card = ({ bgColor, bgImageUrl, description, imageUrl, title }) => (
  <TextContainer bgColor={bgColor} bgImageUrl={bgImageUrl}>
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </TextContainer>
);

export default Card;
