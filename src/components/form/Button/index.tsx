import * as React from 'react';
import { ButtonComponent, ButtonWrapper } from './style';
import { Props } from './types';
import { Text } from '../../typography';

const Button = ({ onClick, text, active }: Props): JSX.Element => {
    return (
        <ButtonWrapper>
            <ButtonComponent active={active} onClick={() => onClick()}>
                <>{text}</>
            </ButtonComponent>
        </ButtonWrapper>
    );
};

export default Button;
