import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import useIsInViewport from 'use-is-in-viewport';
import Button from '../components/Button';
import Card from '../components/Card';
import Header from '../components/Header';
import Section from '../components/Section';

const TextContainer = styled.div`
  background: ${(props) => props.theme.colorPalette.white};
  border: none;
  border-radius: 1.5em;
  color: ${(props) => props.theme.colorPalette.black};
  padding: 1em 1.5em;
  text-align: left;
  width: 500px;
  span {
    font-weight: 500;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 4em;
  }
  -webkit-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  -moz-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  -o-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  &.hidden {
    will-change: opacity;
    opacity: 0;
    -webkit-transform: translateY(10vh);
    -moz-transform: translateY(10vh);
    -o-transform: translateY(10vh);
    transform: translateY(10vh);
  }
  &.visible {
    opacity: 1;
    transform: none;
  }
`;

const Column = styled.div`
  margin-right: 4em;
`;

const passionsQuery = graphql`
  query passionsQuery {
    allPassionItemsJson {
      edges {
        node {
          title
          description
          bgColor
          imageUrl
          bgImageUrl
        }
      }
    }
  }
`;

const About = () => {
  const { allPassionItemsJson } = useStaticQuery(passionsQuery);
  const [isInViewport, targetRef] = useIsInViewport();
  return (
    <Section>
      <Header>About Me</Header>
      <Row ref={targetRef} className={isInViewport ? 'visible' : 'hidden'}>
        <Column>
          <img src="assets/profilePic.svg" alt="Jess" />
          <Button
            href="https://drive.google.com/file/d/1Q1sDxxgvIbdiEvTbR0Xxzjjm99fjHjLq/view?usp=sharing"
            label="Resume"
          />
        </Column>
        <TextContainer>
          <p>
            Hey, I&apos;m Jess! I&apos;m a 4th year UBC computer science nerd
            passionate about both
            <span> design </span>
            and
            <span> technology</span>
            .
          </p>
          <p>
            I love finding ways to connect the two and bring creations to life,
            especially in the areas of web development. If you want to know more
            about me, keep on scrolling!
          </p>
        </TextContainer>
      </Row>
      <Header>Passions</Header>
      <Row>
        {allPassionItemsJson.edges.map((item) => (
          <Card
            key={item.node.title}
            bgColor={item.node.bgColor}
            bgImageUrl={item.node.bgImageUrl}
            description={item.node.description}
            imageUrl={item.node.imageUrl}
            title={item.node.title}
          />
        ))}
      </Row>
    </Section>
  );
};

export default About;
