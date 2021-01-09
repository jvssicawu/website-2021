import styled from 'styled-components';

const FadeIn = styled.div`
  -webkit-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  -moz-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  -o-transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  transition: opacity 0.6s ease-in, transform 0.6s ease-out;
  &.hidden {
    will-change: opacity;
    opacity: 0;
    -webkit-transform: translateY(5vh);
    -moz-transform: translateY(5vh);
    -o-transform: translateY(5vh);
    transform: translateY(5vh);
  }
  &.visible {
    opacity: 1;
    transform: none;
  }
`;

export default FadeIn;
