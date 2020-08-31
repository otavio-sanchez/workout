import * as React from "react";
import { RowContent } from "./style";
import { Props } from "./types";

const Row = ({ children, active }: Props): JSX.Element => {

  return <RowContent onMouseOver={() => active(true)} >{children}</RowContent>;
};

export default Row;
