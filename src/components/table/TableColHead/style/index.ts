import styled from 'styled-components';
import sizes from '../../../../assets/theme/sizes';
import colors from   '../../../../assets/theme/colors';

const ColContent = styled.th`
    position: relative;
    margin: auto;
    background-color: ${colors.light};
    padding: 16px 8px;
    text-align: left;
    font-size: ${sizes.font.fontSizeSmall}px;
    color: ${colors.secondary};
    font-weight: bold;
`;

export { ColContent };
