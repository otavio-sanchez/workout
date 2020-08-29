import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';

const ButtonWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
`;

const ButtonComponent = styled.button<any>`
    transition: all .5s;
    opacity: 1;
    background-color: ${colors.background};
    border: 0px solid #fff;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: 0;
    }
`;

export { ButtonComponent, ButtonWrapper };
