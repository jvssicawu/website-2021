import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Tabs from './Tabs';

const projectQuery = graphql`
  query projectQuery {
    allDataJson {
      edges {
        node {
          projectTypes
          projects {
            buttons {
              href
              label
            }
            description
            imagePreviewUrl
            imageUrl
            name
            type
          }
        }
      }
    }
  }
`;

const Projects = () => {
  const { allDataJson } = useStaticQuery(projectQuery);
  const { projectTypes, projects } = allDataJson.edges[0].node;
  return (
    <>
      <Tabs list={projectTypes} contents={projects} />
    </>
  );
};

export default Projects;
