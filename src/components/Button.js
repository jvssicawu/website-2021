import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  background: ${(props) => props.theme.colorPalette.primaryButton};
  border: none;
  border-radius: 1.5em;
  padding: 0.8em;
  margin: 0.5em 1.5em;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  a {
    color: ${(props) => props.theme.global.color};
    font-weight: 500;
    text-decoration: none;
  }
  &:hover,
  &:focus-within {
    background: ${(props) => props.theme.colorPalette.primaryButtonHover};
    cursor: pointer;
  }s
`;

const Button = ({ href, label }) => (
  <ButtonWrapper>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </ButtonWrapper>
);

export default Button;
