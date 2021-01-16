import styled from 'styled-components';
import Device from '../constants/Device';

const Content = styled.div`
  background: ${(props) => props.theme.colorPalette.white};
  border: none;
  border-radius: 1.5em;
  color: ${(props) => props.theme.colorPalette.black};
  text-align: left;
  width: 100%;
  margin-top: 1em;
  span {
    font-weight: 500;
  }
  p {
    &:not(:last-child) {
      padding-bottom: 0;
    }
    margin: 0;
  }
  p.bio {
    padding: 1.5em;
    &:not(:last-child) {
      padding-bottom: 0;
    }
  }
  @media ${Device.tablet} {
    margin-top: 0;
    max-width: 450px;
  }
`;

export default Content;
