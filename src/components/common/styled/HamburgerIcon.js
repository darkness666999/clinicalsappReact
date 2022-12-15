import styled from 'styled-components';

const HamburgerIcon = styled.nav`
    margin: auto 0 auto auto;
    width: 25 px;
    min-width: 25px;
    padding: 5px;

    > div {
        height: 3px;
        background: ${(p) => p.theme.bodyFontColor};
        margin: 5px 0;
        width: 100%;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export { HamburgerIcon }