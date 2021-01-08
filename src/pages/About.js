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
        <Content>
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
        </Content>
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
