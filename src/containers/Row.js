import styled from 'styled-components';
import FadeIn from './FadeIn';

const Row = styled(FadeIn)`
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 4em;
  }
`;

export default Row;
