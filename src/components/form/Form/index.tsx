import * as React from "react";
import { Props } from "./types";
import { FormContent, Title } from "./style";

const Form = ({ children, title, onSubmit }: Props): JSX.Element => {
  return (
    <FormContent onSubmit={onSubmit}>
      <Title>{title}</Title>
      {children}
    </FormContent>
  );
};

export default Form;
