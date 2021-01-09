import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const bioQuery = graphql`
  query bioQuery {
    allDataJson {
      edges {
        node {
          biography {
            description
            imageUrl
            title
          }
        }
      }
    }
  }
`;

const Biography = () => {
  const { allDataJson } = useStaticQuery(bioQuery);
  const { biography } = allDataJson.edges[0].node;
  return (
    <>
      <img src={biography.imageUrl} alt={biography.title} />
      <h1>{biography.title}</h1>
      <span>{biography.description}</span>
    </>
  );
};

export default Biography;
