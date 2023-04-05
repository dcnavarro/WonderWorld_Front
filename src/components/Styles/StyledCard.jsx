import styled from 'styled-components';

const StyledCard = styled.div`

    align-items: center;
    display: flex;
    width: 500px;
    height: 500px;
    background-color: #2c2a2a;
    opacity: 0.95;
    font-family: 'Alkatra';
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    margin: 40px;
    padding: 60px;

& > div{
    flex:1;
}
`

export {StyledCard};