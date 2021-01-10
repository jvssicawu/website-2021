import React from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent,
  DialogContentText,
  ThemeProvider,
} from '@material-ui/core';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import Button from './Button';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Solway, Helvetica',
    body1: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 700,
    },
  },
});

const DialogTitle = withStyles(() => ({
  root: {
    paddingBottom: 0,
  },
}))(MuiDialogTitle);

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  > * {
    margin: 0em 0em 0.5em 1em;
  }
  > * :hover {
    -webkit-transform: none;
    -moz-transform: none;
    -o-transform: none;
    transform: none;
  }
`;

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

const ProjectCard = ({ project }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CardWrapper>
      <img src={project.imagePreviewUrl} alt={`${project.name} Preview`} />
      <Overlay onClick={handleClickOpen}>
        <h2>{project.name}</h2>
      </Overlay>
      <ThemeProvider theme={theme}>
        <Dialog open={open} onClose={handleClose}>
          <img src={project.imageUrl} alt={project.name} />
          <DialogTitle>{project.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>{project.description}</DialogContentText>
            <ButtonWrapper>
              {project.buttons.map((button) => (
                <Button
                  key={button.label}
                  href={button.href}
                  label={button.label}
                />
              ))}
            </ButtonWrapper>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </CardWrapper>
  );
};

export default ProjectCard;
