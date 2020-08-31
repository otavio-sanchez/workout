import styled from 'styled-components';
import colors from '../../../../assets/theme/colors';
import sizes from '../../../../assets/theme/sizes';

const TitleLarge = styled.h1<{ type?: string; bold?: boolean }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.font};
    padding-bottom: 12px;
    margin-bottom: 19px;
    border-bottom: 1px solid #ddd;
    ${({ bold }): string => bold && 'font-weight: bold;'}
`;

const SubTitle = styled.h3<{ type?: string; bold?: boolean }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.dark};
    padding-bottom: 10px;
    ${({ bold }): string => bold && 'font-weight: bold;'}
`;

const Regular = styled.div<{ type?: string; bold?: boolean }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.main};
    width: 100%;
    display: block;
    ${({ bold }): string => bold && 'font-weight: bold;'}
`;

const Default = styled.div<{ type?: string; bold?: boolean }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.dark};
    ${({ bold }): string => bold && 'font-weight: bold;'}
`;

const Error = styled.div<{ type?: string; bold?: boolean }>`
    font-size: ${sizes.font.fontSizeSmall}px;
    color: ${colors.alert};
    margin: 5px 2px 0px 0px;
`;

const Label = styled.label<{ type?: string; bold?: boolean }>`
    font-size: ${sizes.font.fontSizeMedium}px;
    color: ${colors.light};
    ${({ bold }): string => bold && 'font-weight: bold;'}

    @media (max-width: ${sizes.screen.tabletWidth + 1}px) {
        font-size: ${sizes.font.fontSizeSmall}px;
    }
`;

export { TitleLarge, SubTitle, Regular, Default, Label, Error };
