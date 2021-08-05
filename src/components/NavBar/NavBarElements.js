import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom'
import { GiWorld } from 'react-icons/gi'


export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid lightgrey;
`;

export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`

export const NavLogo = styled(Link)`
  color: #191919;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
 
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    width: 100%;
  }
`


export const NavIcon = styled(GiWorld)`
  margin-right: 1rem;
  height: 80px;
  width: 50px;

  @media screen and (max-width: 768px) {
    margin-left: -0.8rem;
    margin-right: 0.8rem;
    width: 40px;
  }
`

export const MobileIcon = styled.span`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 13px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.3rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #91B6FB;
  }`

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #191919;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`

export const NavLink = styled(Link)`
  color: #191919;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    font-size: 1.1rem;
    display: table;
    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
  }
`;