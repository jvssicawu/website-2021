import React from 'react';
import styled from 'styled-components';
import Device from '../constants/Device';

const ButtonWrapper = styled.div`
  background: ${(props) => props.theme.colorPalette.primaryButton};
  border: none;
  border-radius: 1.5em;
  padding: 0.8em;
  margin: auto;
  margin-bottom: 0.5em;
  text-align: center;
  min-width: 25%;
  max-width: 8em;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  a {
    color: ${(props) => props.theme.global.color};
    font-weight: 500;
    text-decoration: none;
  }
  &:hover {
    background: ${(props) => props.theme.colorPalette.primaryButtonHover};
    cursor: pointer;
    -webkit-transform: translateY(-6px);
    -moz-transform: translateY(-6px);
    -o-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  @media ${Device.tablet} {
    min-width: 8em;
  }
`;

const Button = ({ href, label }) => (
  <ButtonWrapper>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </ButtonWrapper>
);

export default Button;
