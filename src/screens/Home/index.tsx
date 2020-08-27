import React from "react";
import { Form, TextInput, Button, Datepicker } from "../../components/form";

const Home = (): JSX.Element => {
  return (
    <Form title="Insert on Item">
      <TextInput
        name="time"
        type="number"
        value={"0"}
        onChange={(value) => console.log(value)}
      />
      <Datepicker
        onChange={(date: any) => {
          console.log(date);
        }}
      />
      <Button onClick={() => {}} text={"Add"} />
    </Form>
  );
};

export default Home;
