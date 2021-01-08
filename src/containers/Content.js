import styled from 'styled-components';

const Content = styled.div`
  background: ${(props) => props.theme.colorPalette.white};
  border: none;
  border-radius: 1.5em;
  color: ${(props) => props.theme.colorPalette.black};
  padding: 1em 1.5em;
  text-align: left;
  width: 500px;
  span {
    font-weight: 500;
  }
`;

export default Content;
