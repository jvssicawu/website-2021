import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import useIsInViewport from 'use-is-in-viewport';
import Button from '../components/Button';
import Card from '../components/Card';
import Content from '../containers/Content';
import Header from '../components/Header';
import Row from '../containers/Row';
import Section from '../containers/Section';

const Column = styled.div`
  margin-right: 4em;
`;

const aboutQuery = graphql`
  query aboutQuery {
    allDataJson {
      edges {
        node {
          passions {
            bgColor
            bgImageUrl
            description
            imageUrl
            title
          }
          biography {
            description
            imageUrl
            aboutMe {
              part1
              part2
              part3
              part4
              span1
              span2
            }
          }
          buttons {
            resume {
              href
              label
            }
          }
        }
      }
    }
  }
`;

const About = () => {
  const { allDataJson } = useStaticQuery(aboutQuery);
  const { passions, biography, buttons } = allDataJson.edges[0].node;
  const [isInViewport, targetRef] = useIsInViewport();
  return (
    <Section>
      <Header>About Me</Header>
      <Row ref={targetRef} className={isInViewport ? 'visible' : 'hidden'}>
        <Column>
          <img src={biography.imageUrl} alt={biography.description} />
          <Button href={buttons.resume.href} label={buttons.resume.label} />
        </Column>
        <Content>
          <p>
            {biography.aboutMe.part1}
            <span>{biography.aboutMe.span1}</span>
            {biography.aboutMe.part2}
            <span>{biography.aboutMe.span2}</span>
            {biography.aboutMe.part3}
          </p>
          <p>{biography.aboutMe.part4}</p>
        </Content>
      </Row>
      <Header>Passions</Header>
      <Row>
        {passions.map((item) => (
          <Card
            key={item.title}
            bgColor={item.bgColor}
            bgImageUrl={item.bgImageUrl}
            description={item.description}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </Row>
    </Section>
  );
};

export default About;
