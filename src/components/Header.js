import styled from 'styled-components';

const Header = styled.h1`
  font-weight: 300;
  font-size: 1.5em;
  display: flex;
  justify-content: left;
  padding: 1em;
  &:before {
    content: '';
    background: url('assets/headerDecoration.svg') left top no-repeat;
    display: block;
    height: 50px;
    width: 50px;
    left: 30px;
    top: -16px;
    position: relative;
    box-sizing: border-box;
  }
  &:after {
    content: '';
    background: url('assets/stars.svg') left top no-repeat;
    display: block;
    height: 60px;
    width: 60px;
    position: absolute;
    box-sizing: border-box;
  }
`;

export default Header;
