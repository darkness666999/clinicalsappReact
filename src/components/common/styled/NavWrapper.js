import styled from 'styled-components';

const NavWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0%;
    background-image: linear-gradient(
        to right,
        ${(p) => p.theme.primaryColor},
        ${(p) => p.theme.secondaryColor}
    );
    border-bottom: 3px solid ${(p) => p.theme.primaryColor};
`;

export { NavWrapper }
