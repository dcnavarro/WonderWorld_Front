import styled from 'styled-components';

export const StyledButton = styled.button`
    border-radius: 15px;
    box-shadow: 0 0 20px (rgba 0, 0, 0, 0.60);
    cursor: pointer;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Alkatra';
    padding: 15px, 60px;
    background-color: ${({bg})=>bg || '#157c83'};
    color: ${({color})=>color || '#f7f3f3'};
    margin-bottom: 20px;
    margin-top: 20px;

    &:hover{
        opacity: 0.7;
        transform: scale(1.1);

    }

`