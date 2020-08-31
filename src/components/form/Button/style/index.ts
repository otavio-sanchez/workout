import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';

const ButtonWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    font-size: ${sizes.font.fontSizeSmall}px;
`;

const ButtonComponent = styled.button<any>`
    color: ${colors.secondary};
    height: 48px;
    z-index: 1;
    border-radius: 8px;
    padding: 8px 20px;
    border: 1px solid  ${colors.secondary};
    background-color: ${colors.light};
    cursor: pointer;
    transition: all .5s;
    width: 100%;
    font-weight: bold;
    font-size: ${sizes.font.fontSizeSmall}px;

    &:hover {
        color: ${colors.light};
        border: 1px solid ${colors.light};
        background-color:  ${colors.secondary};
    }

    &:focus {
        outline: 0;
    }
`;

export { ButtonComponent, ButtonWrapper };
