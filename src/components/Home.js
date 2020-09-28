import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './Link';
import './Home.module.css';

const SectionContainer = styled.div`
  margin: auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const LinkContainer = styled.div`
  margin-top: 1rem;
  list-style: none;
`;

const socialLinksQuery = graphql`
  query socialLinksQuery {
    allSocialLinkItemsJson {
      edges {
        node {
          description
          href
          imageUrl
        }
      }
    }
  }
`;

function Home() {
  const { allSocialLinkItemsJson } = useStaticQuery(socialLinksQuery);
  return (
    <SectionContainer>
      <img src="assets/profilePic.svg" alt="Jess" />
      <h1>Jessica Wu</h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <span>Hi, I'm a developer!</span>
      <LinkContainer>
        {allSocialLinkItemsJson.edges.map((item) => (
          <Link
            description={item.node.description}
            href={item.node.href}
            imageUrl={item.node.imageUrl}
          />
        ))}
      </LinkContainer>
    </SectionContainer>
  );
}

export default Home;
