import styled from 'styled-components';

export const StyledButtonSearchBar = styled.button`
    border-radius: 5px;
    height: 40px;
    width: 200px;
    box-shadow: 0 0 20px (rgba 0, 0, 0, 0.40);
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    font-family: 'Alkatra';
    padding: 15px, 60px;
    background-color: ${({bg})=>bg || '#fff'};
    color: ${({color})=>color || '#636161'};
    opacity: 0.7;
    margin-bottom: 0px;
    margin-top: 15px;

    &:hover{
        opacity: 0.99;
        transform: scale(1.1);

    }

`