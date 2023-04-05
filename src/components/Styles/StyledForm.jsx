import styled from 'styled-components';

const StyledForm = styled.form`
    align-items: center;
    color: white;
    margin-bottom: 40px;
    width: 100%;
    height: 100%;
    font-family: 'Alkatra';

    label{
    display: flex;
    justify-content: space-around;
    color: #c9c4c4;
    font-family: 'Alkatra';
    font-size: 25px;
    }

    form{
        align-items: center;
    }

    ul{
     list-style-type: none;
    }
    
    input{
    border-radius: 5px;
    padding: 1rem;
    margin-top: 0px;
    width: 600px;
    height: 40px;
    font-size: 20px;
    opacity: 0.7;
    }

    span{
        color: red;
        font-size: 25px;
        font-family: 'Alkatra';

    }
    
`

export {StyledForm};