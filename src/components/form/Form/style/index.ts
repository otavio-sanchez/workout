import styled from 'styled-components';
import { Text } from '../../../typography';
import colors from '../../../../assets/theme/colors';

const FormContent = styled.form`
    position: flex;
    flex-direction: grid;
    width: 100%;
    padding: 18px;
    background-color: ${colors.light};
    border: 1px solid #ddd;
    box-sizing: border-box;
`;

const Title = styled(Text).attrs({
    type: 'title'
})`
`

export { FormContent, Title };
