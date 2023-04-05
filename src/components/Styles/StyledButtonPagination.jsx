import styled from 'styled-components';

export const StyledButtonPagination = styled.button`
    border-radius: 5px;
    width: 45px;
    box-shadow: 0 0 20px (rgba 0, 0, 0, 0.40);
    cursor: pointer;
    font-size: 20px;
    font-weight: 200;
    font-family: 'Alkatra';
    background-color: ${({bg})=>bg || '#3c3f3f'};
    opacity: 0.7;
    color: ${({color})=>color || '#f7f3f3'};
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 6px;

    &:hover{
        opacity: 0.99;
        transform: scale(1.3);
        border: white;

    }

`