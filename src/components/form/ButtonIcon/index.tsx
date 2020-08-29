import * as React from 'react';
import { ButtonComponent, ButtonWrapper } from './style';
import { Props } from './types';
import { Text } from '../../typography';

const ButtonIcon = ({ onClick, children, active }: Props): JSX.Element => {
    return (
        <ButtonWrapper>
            <ButtonComponent type={'button'} active={active} onClick={() => onClick()}>
                <>{children}</>
            </ButtonComponent>
        </ButtonWrapper>
    );
};

export default ButtonIcon;
