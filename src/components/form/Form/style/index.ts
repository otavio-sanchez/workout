import styled from 'styled-components';
import { Text } from '../../../typography';
import colors from '../../../../assets/theme/colors';

const FormContent = styled.form`
    position: flex;
    flex-direction: grid;
    width: 100%;
    padding: 18px;
    background-color: ${colors.background};
    border: 1px solid #ddd;
`;

const Title = styled.div`
    background-color: ${colors.background};
    position: absolute;
    top: -9px;
    left: 18px;
    padding: 0px 8px;
`

export { FormContent, Title };
