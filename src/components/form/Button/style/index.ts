import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';

const ButtonWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
`;

const ButtonComponent = styled.button<any>`
    color: ${colors.secondary};
    font-size: ${sizes.font.fontSizeSmall}px;
    height: 48px;
    z-index: 1;
    border-radius: 8px;
    padding: 8px 20px;
    border: 1px solid ${({ active }) => (active ? colors.main : 'rgb(153, 153, 153)')};
    background-color: ${colors.light};
    width: 100%;
    cursor: pointer;

    &:hover {
        color: ${colors.main};
    }

    &:focus {
        outline: 0;
    }
`;

export { ButtonComponent, ButtonWrapper };
