import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Tabs from './Tabs';

const ProjectsWrapper = styled.div``;

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
    <ProjectsWrapper>
      <Tabs list={projectTypes} contents={projects} />
    </ProjectsWrapper>
  );
};

export default Projects;
