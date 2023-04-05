import styled from 'styled-components';

export const StyledButtonNavBar = styled.button`
    border: none;
    box-shadow: 0 0 20px (rgba 0, 0, 0, 0.40);
    cursor: pointer;
    font-size: 30px;
    font-weight: 700;
    font-family: 'Alkatra';
    padding: 15px, 60px;
    background-color: transparent;
    color: ${({color})=>color || '#333'};
    margin-bottom: 20px;
    margin-top: 20px;

    &:hover{
        opacity: 0.7;
        transform: scale(1.1);

    }

`