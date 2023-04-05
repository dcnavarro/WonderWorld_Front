import styled from 'styled-components';

const StyledCardForm = styled.div`

    width: 1200px;
    height: 800px;
    background-color: #2c2a2a;
    opacity: 0.8;
    font-family: 'Alkatra';
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    margin: 40px;
    padding: 100px;
    align-items: center;


& > div{
    flex:1;
}

h1{
    display: flex;
    color: #40e41f;
    font-family: 'Alkatra';
    font-size: 40px;
}

h2{
    display: flex;
    color: #c9c4c4;
    font-family: 'Alkatra'
    
}

`

export {StyledCardForm};