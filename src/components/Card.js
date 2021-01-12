import React from 'react';
import styled from 'styled-components';
import Device from '../constants.js/Device';

const TextContainer = styled.div`
  background: ${(props) => props.theme.colorPalette[props.bgColor]};
  box-shadow: 0 0 5px 0 ${(props) => props.theme.colorPalette[props.bgColor]};
  border: none;
  border-radius: 1.5em;
  color: ${(props) => props.theme.colorPalette.black};
  padding-bottom: 0.5em;
  margin: auto;
  margin-bottom: 2em;
  text-align: center;
  width: 100%;
  max-width: 300px;
  p {
    padding: 0em 1em;
  }
  h3 {
    margin-bottom: 0;
  }
  img {
    margin-top: 1.5em;
    background: url(${(props) => props.bgImageUrl}) center center no-repeat;
    background-size: auto 100%;
  }
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  @media ${Device.tablet} {
    margin: 1em;
    width: 300px;
    p {
      padding: 0em 1.5em;
    }
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
