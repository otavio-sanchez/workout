import React, { useState } from "react";
import FormWorkout from "./components/FormWorkout";
import TableWorkout from "./components/TableWorkout";
import CountExercises from "./components/CountExercises";
import { Divisor } from '../../components/layout'

const Home = (): JSX.Element => {
  const [list, setList] = useState([]);

  const add = (form: any) => {
    setList(list.concat(form));
    console.log(list);
  };

  return (
    <>
      <FormWorkout title={"Insert on item"} onSubmit={add} />
      <Divisor />
      <TableWorkout list={list} />
      <CountExercises list={list} />
    </>
  );
};

export default Home;
