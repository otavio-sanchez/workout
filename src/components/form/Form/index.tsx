import * as React from "react";
import { Props } from "./types";
import { FormContent, Title } from "./style";

const Form = ({ children, title }: Props): JSX.Element => {
  return (
    <FormContent>
      <Title>{title}</Title>
      {children}
    </FormContent>
  );
};

export default Form;
