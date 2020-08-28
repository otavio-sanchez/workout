import * as React from "react";
import { ColContent } from "./style";
import { Props } from "./types";

const Col = ({ children }: Props): JSX.Element => {
  return <ColContent>{children}</ColContent>;
};

export default Col;
