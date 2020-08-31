import styled from 'styled-components';
import sizes from '../../../../assets/theme/sizes';
import colors from '../../../../assets/theme/colors';

const HeaderContent = styled.header`
    width: 100vw;
    margin: 0px auto;
    padding: 16px;
    box-sizing: border-box;
    text-align: center;
`;

const Logo = styled.a`
    font-size: ${sizes.font.fontSizeLarge}px;
    color: ${colors.main};
    text-decoration: none;
    transition: color .5s;

    &:hover {
        color: ${colors.secondary};
    }

    span {
        color: ${colors.secondary};
        font-weight: bold;
    }
`;

export { HeaderContent, Logo };