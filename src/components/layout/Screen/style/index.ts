import styled from 'styled-components';
import sizes from '../../../../assets/theme/sizes';

const Container = styled.div`
    display: flex;
    justify-content:start-flex;
    align-content: start-flex;
    min-width: 100vw;
    min-height: 100vh;
    flex-direction: column;
`;


const Content = styled.section`
    position: relative;
    display: block;
    max-width: ${sizes.container.maxWidth}px;
    width: 100%;
    margin: 0px auto;
`;

export { Content, Container };