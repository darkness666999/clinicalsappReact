import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HamburgerIcon, StyledNavLinkBar, Menu, NavWrapper, Toggle} from '../CommonIndex';
import { useLocation } from 'react-router-dom';

export function Navbar() {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const {id,setTheme} = useContext(ThemeContext);
    return (
        <NavWrapper>
            <HamburgerIcon onClick={() => setMenuOpen((s) => !s)}>
                <div />
                <div />
                <div />
            </HamburgerIcon>
            <Menu open={menuOpen}>
                <StyledNavLinkBar to="/" isActive={pathname === '/'}>
                    Home
                </StyledNavLinkBar>
                <StyledNavLinkBar to="/about" isActive={pathname === '/about'}>
                    About
                </StyledNavLinkBar>
                <Toggle isActive={id === 'dark'} onToggle={setTheme}/>
            </Menu>
        </NavWrapper>
    );
}

export default Navbar