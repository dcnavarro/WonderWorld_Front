import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: ${({theme})=>theme.colors.footer};
    width: 1280px;
    color: #272525;
    border-radius: 15px;
    padding: 60px;
    margin-top: 0px;
    font-family: 'Alkatra';
    font-size: 20px;
    font-weight: 800;

    ul{
        list-style-type: none;
    }

    ul li{
        margin-bottom: 5px;
    }

    p{
        text-align: right;
    }
    
`

export {StyledFooter};