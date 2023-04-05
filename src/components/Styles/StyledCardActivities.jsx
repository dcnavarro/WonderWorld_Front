import styled from 'styled-components';

const StyledCardActivities = styled.div`

    align-items: center;
    justify-content: space-around;
    width: 1200px;
    height: 600px;
    background-color: #2c2a2a;
    opacity: 0.95;
    font-family: 'Alkatra';
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    margin: 40px;
    padding: 20px;

& > div{
    flex:1;
}

hr{
    color: #40e41f;
}

h1{
    display: flex;
    justify-content: space-around;
    color: #40e41f;
    font-family: 'Alkatra'
}

h2{
    display: flex;
    justify-content: space-around;
    color: #c9c4c4;
    font-family: 'Alkatra'
    
}

h3{
    display: flex;
    justify-content: space-around;
    color: #c9c4c4;
    font-family: 'Alkatra';
    font-size: 20px
    
}

`

export {StyledCardActivities};