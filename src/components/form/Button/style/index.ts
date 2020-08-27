import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';

const ButtonWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
`;

const ButtonComponent = styled.button<any>`
    color: ${colors.main};
    font-size: ${sizes.font.fontSizeSmall}px;
    height: 48px;
    z-index: 1;
    border-radius: 8px;
    padding: 8px 20px;
    border: 1px solid ${({ active }) => (active ? colors.main : colors.main)};
    background-color: ${colors.light};
    cursor: pointer;
    transition: all .5s;
    width: 100%;

    &:hover {
        color: ${colors.secondary};
        border: 1px solid ${colors.secondary};
    }

    &:focus {
        outline: 0;
    }
`;

export { ButtonComponent, ButtonWrapper };
