import * as React from "react";
import { SelectInput, InputWrapper } from "./style";
import { Props } from "./types";
import { Text } from "../../typography";

const Select = ({ label, onClick, name, options }: Props): JSX.Element => {
  return (
    <InputWrapper>
      <SelectInput
        onClick={(value) => {
          console.log(value)
          onClick(name, 'a')
        }}
      >
        <option value="" hidden>
          {label || 'Date'}
        </option>
        {options.length &&
          options.map((option) => (
            <option key={option.value} value={option.value}>{option.key}</option>
          ))}
      </SelectInput>
    </InputWrapper>
  );
};

export default Select;
