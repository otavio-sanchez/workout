import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "./store/actionType";
import { addExercise, removeExercise, resetExercises } from "./store/actions";
import FormWorkout from "./components/FormWorkout";
import TableWorkout from "./components/TableWorkout";
import CountExercises from "./components/CountExercises";
import { Divisor } from "../../components/layout";

const Home = (): JSX.Element => {
  const listExercises = useSelector((state: stateType) => state.exercises.list);

  const dispatch = useDispatch();

  const add = async (form: any) => {
    await dispatch(addExercise(form));
  };

  const remove = async (form: any) => {
    await dispatch(removeExercise(form));
  };

  return (
    <>
      <FormWorkout title={"Insert on item"} onSubmit={add} />
      <Divisor />
      <TableWorkout removeExercise={remove} list={listExercises} />
      <CountExercises list={listExercises} />
    </>
  );
};

export default Home;
