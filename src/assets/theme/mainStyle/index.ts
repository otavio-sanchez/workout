import { createGlobalStyle } from "styled-components";
import colors from "../colors";
import sizes from "../sizes";

export default createGlobalStyle`
    body {
        background-color: ${colors.background};
        font-family: Arial;
        font-size: ${sizes.font.fontSizeMedium}px;
    }

    .react-datepicker-wrapper{
        width: 100%;
    }
`;
