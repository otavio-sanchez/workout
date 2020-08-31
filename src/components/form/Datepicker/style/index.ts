import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: block;
`;

const Picker = styled(DatePicker)`

        outline: none;
        border: 1px solid rgb(153, 153, 153);
        width: 100%;
        z-index: 1;
        position: relative;
        box-sizing: border-box;
        color: ${colors.main};
        height: 48px;
        padding-right: 20px;
        z-index: 1;
        padding-left: 20px;
        font-size: ${sizes.font.fontSizeSmall}px;
         
        border-radius: 8px;

        @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
            font-size: ${sizes.font.fontSizeMedium}px;
        }

        ::placeholder {
            color: ${colors.main};
         }

 
`;


export { InputWrapper, Picker };
