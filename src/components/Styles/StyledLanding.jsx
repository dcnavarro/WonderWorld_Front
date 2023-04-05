import styled from 'styled-components';
import aurora4 from './images/aurora4.jpg';

const StyledLanding = styled.div`
    background-image: url(${aurora4});
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    width: 1280px;
    height: 720px;
    margin: 100px;
    margin-top: 5px;
    padding: 0px;
    font-family: 'Alkatra';


& > div{
    flex:1;
}

h1{
    color: hsl(192, 100%, 9%);
    font-family: 'Alkatra';
    font-size: 5em;
    margin:0;       
}

h2{
    color: hsl(192, 100%, 9%);
    font-family: 'Alkatra';
    font-size: 2em;
    margin:0;
}

h3{
    color: hsl(192, 100%, 9%);
    font-family: 'Alkatra';
    font-size: 1.5em;
    margin:0;
}
`

export {StyledLanding};