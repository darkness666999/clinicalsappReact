import styled from 'styled-components';
import { NavLink as ReactRouterDomNavLink } from 'react-router-dom';

const NavLink = ({ isActive, children, ...props }) => {
    return <ReactRouterDomNavLink {...props}>{children}</ReactRouterDomNavLink>;
};

const StyledNavLinkBar = styled(NavLink)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
    color: ${(p) => p.theme.bodyFontColor};
`;

export { StyledNavLinkBar };
