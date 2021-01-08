import styled from 'styled-components';

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

export default Row;
