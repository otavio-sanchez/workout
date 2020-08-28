import React from "react";
import FormWorkout from './components/FormWorkout'

const Home = (): JSX.Element => {
  return (
    <FormWorkout title={'Test'} onSubmit={(form: any)=> {
      console.log(form)
    }} />
  );
};

export default Home;
