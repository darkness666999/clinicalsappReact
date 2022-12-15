import styled from "styled-components";

const Menu = styled.nav`
    display: ${(p) => (p.open ? 'block' : 'none')};
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
    background: ${(p) => p.theme.bodyBackgroundColor};

    @media (min-width: 768px) {
        display: flex;
        background: none;
        left: initial;
        top: initial;
        position: relative;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
    }
`;

export { Menu }