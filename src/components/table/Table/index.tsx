import * as React from "react";
import { TableContent } from "./style";
import { Props } from "./types";

const Table = ({ children }: Props): JSX.Element => {
  return <TableContent>{children}</TableContent>;
};

export default Table;
