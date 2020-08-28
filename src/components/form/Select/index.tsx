import * as React from "react";
import { SelectInput, InputWrapper } from "./style";
import { Props } from "./types";
import { Text } from "../../typography";

const Select = ({
  label,
  onChange,
  name,
  options,
  value,
}: Props): JSX.Element => {
  return (
    <InputWrapper>
      <SelectInput
        onChange={(event) => {
          onChange(name, event.target.value);
        }}
        value={value}
      >
        <option value="">{label || "Selecione..."}</option>
        {options.length &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          ))}
      </SelectInput>
    </InputWrapper>
  );
};

export default Select;
