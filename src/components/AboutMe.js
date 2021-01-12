import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import useIsInViewport from 'use-is-in-viewport';
import Button from './Button';
import Content from '../containers/Content';
import Row from '../containers/Row';
import Device from '../constants.js/Device';

const Column = styled.div`
  margin-right: 0;
  img {
    margin-bottom: 1em;
  }
  @media ${Device.tablet} {
    margin-right: 4em;
  }
`;

export const bioQuery = graphql`
  fragment BioFragment on DataJson {
    biography {
      description
      altImageUrl
      aboutMe {
        part1
        part2
        part3
        part4
        span1
        span2
      }
    }
  }
`;

export const buttonQuery = graphql`
  fragment ButtonFragment on DataJson {
    buttons {
      resume {
        href
        label
      }
    }
  }
`;

const AboutMe = ({ biography, buttons }) => {
  const [isInViewport, targetRef] = useIsInViewport();
  return (
    <Row ref={targetRef} className={isInViewport ? 'visible' : 'hidden'}>
      <Column>
        <img src={biography.altImageUrl} alt={biography.description} />
        <Button href={buttons.resume.href} label={buttons.resume.label} />
      </Column>
      <Content>
        <p className="bio">
          {biography.aboutMe.part1}
          <span>{biography.aboutMe.span1}</span>
          {biography.aboutMe.part2}
          <span>{biography.aboutMe.span2}</span>
          {biography.aboutMe.part3}
        </p>
        <p className="bio">{biography.aboutMe.part4}</p>
      </Content>
    </Row>
  );
};

export default AboutMe;
