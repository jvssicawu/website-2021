import React from 'react';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  display: inline-block;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &:not(:last-child) {
    margin-right: 1em;
  }
  & > a {
    padding: 8px;
    padding-bottom: 0px;
  }
  &:focus-within a {
    outline: ${(props) => props.theme.global.color} dotted 2px;
  }
  &:hover {
    filter: invert(0.5) sepia(1) hue-rotate(310deg) saturate(4) brightness(1);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  img {
    margin-bottom: 0px;
  }
`;

const Link = ({ description, href, imageUrl }) => (
  <LinkWrapper>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={description} />
    </a>
  </LinkWrapper>
);

Link.defaultProps = {
  description: 'Oop',
};

export default Link;
