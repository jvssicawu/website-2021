import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin: 2em;
  position: relative;
  img {
    border-radius: 1.5em;
    margin-bottom: 0;
  }
`;

const Overlay = styled.div`
  background-color: ${(props) => props.theme.colorPalette.lavendar};
  border-radius: 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  height: 216px;
  width: 100%;
  opacity: 0;
  overflow: hidden;
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  transition: 0.5s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  h2 {
    text-align: left;
    padding: 1em;
    margin: auto;
  }
`;

const ProjectCard = ({ project }) => (
  <CardWrapper>
    <img src={project.imagePreviewUrl} alt={project.name} />
    <Overlay>
      <h2>{project.name}</h2>
    </Overlay>
  </CardWrapper>
);

export default ProjectCard;
