import React, { useState } from "react";

import {
  Table,
  TableRow,
  TableCol,
  TableColHead,
} from "../../../../components/table";
import { Props } from "./types";

import { formatDate } from "../../../../utils/replace";
const Home = ({ list }: Props): JSX.Element => {
  return list.length ? (
    <Table
      header={
        <>
          <TableColHead>Tempo</TableColHead>
          <TableColHead>Tipo</TableColHead>
          <TableColHead>Data</TableColHead>
        </>
      }
    >
      {list.map((item, index) => (
        <TableRow key={index}>
          <TableCol>{item.time}</TableCol>
          <TableCol>{item.activities}</TableCol>
          <TableCol>{formatDate(item.date)}</TableCol>
        </TableRow>
      ))}
    </Table>
  ) : (
    <>Empty</>
  );
};

export default Home;
