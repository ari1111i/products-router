import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </Li>
        <li>
          <NavLink to="/products">
            iOS PRODUCTS
          </NavLink>
        </li>
      </Ul>
    </Nav>
  );
};

const Nav = styled('nav')`
  background-color: #8484ff;
  color: white;
  padding: 10px;
  height: 50px;
  justify-content: center;
  display: flex;
  padding-top: 30px;
`
const Ul  = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`
const Li = styled('li')`
  margin-right: 20px;
`
const A = styled('a')`
  text-decoration: none;
  color: white;
&:active{
    color: orange;
 }
`

export default Header;
