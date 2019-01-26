import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'

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

const Header = ({ cartItems = [] }) => (
  <ThemmedNavbar>
    <NavbarBrand>
      <Icon name="faWineBottle" size="lg" />
      <Icon name="faWineGlassAlt" size="lg" />
    </NavbarBrand>
    <Nav>
      <NavItem>
        <NavLink>Minha Adega</NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <CartIcon size={cartItems.length}>
            <Icon name="faShoppingBasket" size="lg" />
          </CartIcon>
        </NavLink>
      </NavItem>
    </Nav>
  </ThemmedNavbar>
)

export default Header
