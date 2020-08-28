import React, { useState } from "react";
import FormWorkout from "./components/FormWorkout";
import TableWorkout from "./components/TableWorkout";

const Home = (): JSX.Element => {
  const [list, setList] = useState([]);

  const add = (form: any) => {
    setList(list.concat(form));
    console.log(list);
  };

  return (
    <>
      <FormWorkout title={"Test"} onSubmit={add} />

      <TableWorkout list={list} />
    </>
  );
};

export default Home;
