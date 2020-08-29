import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: block;
`;

const SelectInput = styled.select`
    outline: none;
    border: 1px solid rgb(153, 153, 153);
    width: 100%;
    z-index: 1;
    position: relative;
    box-sizing: border-box;
    color: ${colors.main};
    font-size: ${sizes.font.fontSizeMedium}px;
    height: 48px;
    padding-right: 20px;
    z-index: 1;
    padding-left: 20px;
     
    border-radius: 8px;


    @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
        font-size: ${sizes.font.fontSizeMedium}px;
    }

    ::placeholder {
        color: ${colors.main};
    }

    option {
        color: ${colors.main};
        font-size: ${sizes.font.fontSizeMedium}px;
        height: 48px;
        padding-right: 20px;
        z-index: 1;
        padding-left: 20px;
         
        border-radius: 8px;
        width: 100%;
      }
`;

export { SelectInput, InputWrapper };
