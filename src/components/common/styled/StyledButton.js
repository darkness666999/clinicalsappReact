import styled from "styled-components";

const StyledButton = styled.button`
    font-family: 'Open Sans';
    color: white;
    background: ${(p) => p.theme.primaryColor};
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1em;
    border: none;
    width: 100%;
    display: block;
    white-space: none;

    &:hover {
        background: #eee;
        color: #666;
        box-shadow: 0px 0px 0px 1px ${(p) => p.theme.primaryColor} inset;
    }
`;

export { StyledButton };