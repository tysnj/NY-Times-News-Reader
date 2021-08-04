import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink
} from './NavBarElements'

const NavBar = () => {
  const [click, setClick] = useState(false)
  
  const handleClick = () => setClick(!click)

  return (
    <IconContext.Provider value={{color: '#191919'}}>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/home'>
            <NavIcon/>
              NY Times News Reader
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to='/home'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/categories'>
                Categories
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default NavBar
