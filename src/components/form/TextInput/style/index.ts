import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';
import Loader from '../../../../assets/icons/loading.svg';

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: block;
`;

const Input = styled.input<{ focused?: boolean }>`
    outline: none;
    border: 1px solid rgb(153, 153, 153);
    width: 100%;
    z-index: 1;
    position: relative;
    box-sizing: border-box;
    color: ${({ focused }): string => (focused ? colors.secondary : colors.main)};
    font-size: ${sizes.font.fontSizeMedium}px;
    height: 48px;
    padding-right: 20px;
    z-index: 1;
    padding-left: 20px;
    max-width: 592px;
    border-radius: 8px;

    @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
        font-size: ${sizes.font.fontSizeMedium}px;
    }

    ::placeholder {
        color: ${colors.main};
    }
`;

const IconLoader = styled(Loader)`
    width: 26px;
    height: 26px;
    margin: auto;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
`;

export { Input, InputWrapper, IconLoader };