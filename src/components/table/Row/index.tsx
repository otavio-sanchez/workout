import * as React from "react";
import { RowContent } from "./style";
import { Props } from "./types";

const Row = ({ children }: Props): JSX.Element => {
  return <RowContent>{children}</RowContent>;
};

export default Row;
