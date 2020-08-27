import * as React from 'react';
import { TitleLarge, SubTitle, Regular, Default, Label } from './style';
import { Props } from './types';

const Text = ({ children, type, bold }: Props): JSX.Element => {
    const typeTitle = (select?: 'subtitle' | 'title' | 'regular' | 'default' | 'label'): JSX.Element => {
        switch (select) {
            case 'title':
                return <TitleLarge bold={bold}>{children}</TitleLarge>;
            case 'subtitle':
                return <SubTitle bold={bold}>{children}</SubTitle>;
            case 'regular':
                return <Regular bold={bold}>{children}</Regular>;
            case 'label':
                return <Label bold={bold}>{children}</Label>;
            default:
                return <Default bold={bold}>{children}</Default>;
        }
    };
    return typeTitle(type);
};

export default Text;
