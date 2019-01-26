import React from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Icon from './Icon'

const ThemmedNavbar = styled(Navbar)`
  background-color: ${props => props.theme.header};
  color: ${props => props.theme.lightText};
  box-shadow: 0 2px 6px 0px ${props => props.theme.shadow};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const CartIcon = styled.div`
  color: ${props => (props.size === 0 ? props.theme.lightText : props.theme.primary)};
`

const NavIcon = styled.div`
  color: ${props => props.theme.lightText};
  font-size: 1.25rem;
  padding-top: auto;
  padding-bottom: auto;
`

const NavLink = styled(Link)`
  margin: 20px;
  color: ${props => props.theme.lightText};
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.lightText};
  }
`

const Item = styled(NavItem)`
  margin-top: auto;
  margin-bottom: auto;
`

const Header = ({ cartItems = [] }) => (
  <ThemmedNavbar>
    <Link to="/">
      <NavIcon>
        <Icon name="faWineBottle" size="lg" />
        <Icon name="faWineGlassAlt" size="lg" />
      </NavIcon>
    </Link>
    <Nav>
      <Item>
        <NavLink to="/orders">Minha Adega</NavLink>
      </Item>
      <Item>
        <Link to={cartItems.length > 0 ? '/cart' : ''}>
          <NavIcon>
            <CartIcon size={cartItems.length}>
              <Icon name="faShoppingBasket" size="lg" />
            </CartIcon>
          </NavIcon>
        </Link>
      </Item>
    </Nav>
  </ThemmedNavbar>
)

export default Header
