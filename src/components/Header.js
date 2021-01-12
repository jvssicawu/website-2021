import styled from 'styled-components';
import Device from '../constants.js/Device';

const Header = styled.h1`
  font-weight: 300;
  display: flex;
  justify-content: center;
  padding: 1em 0em;
  &:after, &:before {
    background: none;
  }
  @media ${Device.tablet} {
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
      width: 60px;
      height: 60px;
      right: 20px;
      top: -30px;
      position: relative;
      box-sizing: border-box;
    }
  }
`;

export default Header;
