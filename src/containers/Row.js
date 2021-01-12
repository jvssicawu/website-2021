import styled from 'styled-components';
import Device from '../constants.js/Device';
import FadeIn from './FadeIn';

const Row = styled(FadeIn)`
  display: block;
  align-items: center;
  justify-content: center;
  padding: 2em;
  &:not(:last-child) {
    margin-bottom: 4em;
  }
  &.experience {
    align-items: stretch;
  }
  @media ${Device.tablet} {
    display: flex;
    padding: 0;
  }
`;

export default Row;
