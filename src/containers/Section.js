import React from 'react';
import styled from 'styled-components';
import Device from '../constants/Device';

const SectionContainer = styled.section`
  min-height: 100vh;
  align-items: center;
  display: flex;
`;

const DivContainer = styled.div`
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  img {
    border-style: none;
    margin-bottom: 0.5em;
  }
  span {
    color: ${(props) => props.theme.colorPalette.primaryButton};
  }
  @media ${Device.mobile} {
    display: block;
    width: 100%;
  }
`;

const Section = ({ children }) => (
  <SectionContainer>
    <DivContainer>{children}</DivContainer>
  </SectionContainer>
);

export default Section;
