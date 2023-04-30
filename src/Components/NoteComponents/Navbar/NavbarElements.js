
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
margin: 10px 0px;
`;
  
export const NavLink = styled(Link)`
  color: #B0E0E6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color: #00008B;
  }
`;
  

  
export const NavMenu = styled.div`
  display: flex;

  align-items: center;

`;