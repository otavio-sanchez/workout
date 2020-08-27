import React from "react";
import {
  Form,
  TextInput,
  Button,
  Datepicker,
  Select,
} from "../../components/form";

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
        name="date"
      />
      <Select
        name="activities"
        onClick={(value) => {
          console.log(value);
        }}
        options={[
          {
            value: "1",
            key: "A",
          },
        ]}
      />
      <Button onClick={() => {}} text={"Add"} />
    </Form>
  );
};

export default Home;
