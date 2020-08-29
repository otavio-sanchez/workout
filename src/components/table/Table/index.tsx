import * as React from "react";
import { TableContent } from "./style";
import { Props } from "./types";

const Table = ({ children, header }: Props): JSX.Element => {
  return (
    <TableContent>
      <thead>
        <tr> {header} </tr>
      </thead>
      <tbody>{children}</tbody>
    </TableContent>
  );
};

export default Table;
