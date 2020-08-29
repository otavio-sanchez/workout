import * as React from 'react';
import { Input, InputWrapper } from './style';
import { Props } from './types';
import { Text } from '../../typography';

const TextInput = ({ label, placeholder, onChange, name, type, loading, value, error }: Props): JSX.Element => {
    const [focused, setFocused] = React.useState(false);

    return (
        <InputWrapper>
            <Text type="label">{label}</Text>
            <Input
                focused={focused}
                placeholder={placeholder ? placeholder : 'Digite aqui...'}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                    return onChange && onChange(name, event.target.value);
                }}
                onFocus={(): void => {
                    setFocused(true);
                }}
                onBlur={(): void => {
                    setFocused(false);
                }}
                value={value}
                type={type ? type : 'text'}
            />
             {error && <Text type="error">{error}</Text>}
        </InputWrapper>
    );
};

export default TextInput;
