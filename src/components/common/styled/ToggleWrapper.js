import styled from "styled-components";

const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    background-image: linear-gradient(to bottom, ${p=>p.theme.primaryColor}, ${p=>p.theme.secondaryColor});
`

export { ToggleWrapper };