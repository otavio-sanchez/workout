import React, { useState } from "react";
import FormWorkout from "./components/FormWorkout";
import {
  Table,
  TableRow,
  TableCol,
  TableColHead,
} from "../../components/table";

const Home = (): JSX.Element => {
  const [list, setList] = useState([]);

  const add = (form: any) => {
    setList(list.concat(form));
    console.log(list);
  };

  return (
    <>
      <FormWorkout title={"Test"} onSubmit={add} />

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
            <TableCol>{item.activies}</TableCol>
            <TableCol>{item.date}</TableCol>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default Home;
