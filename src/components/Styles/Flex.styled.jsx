import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Alkatra';

    & > div,
    & > ul {
        flex:1;
    }
`

export {Flex};