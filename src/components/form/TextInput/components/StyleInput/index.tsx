import * as React from 'react';
import { InputWrapper } from './style';
import { Props } from './types';

const StyleInput = ({ children }: Props): JSX.Element => {
    return <InputWrapper>{children}</InputWrapper>;
};

export default StyleInput;
