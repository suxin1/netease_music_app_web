import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavBox = styled.div`
  width: 100%;
  height: 45px;

  background-color: white;
  position: fixed;
  top: 0;

  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 25% 25% 25% 25%;
  justify-content: center;
  align-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  height: 100%;
  line-height: 45px;
  font-size: 16px;
  font-weight: 600;
  color: #8d8d8d;
  text-align: center;
  transition: all 200ms ease-in;
  &.active {
    font-size: 18px;
    color: black;
  }
`;
