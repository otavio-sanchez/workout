import React, { useState, useEffect, FormEvent } from "react";
import {
  Form,
  TextInput,
  Button,
  Datepicker,
  Select,
} from "../../../../components/form";
import { Col, Container, Row } from "../../../../components/grid";
import { Props, Form as FormType } from "./types";
import { validation, formErrors } from "./validation";
import { exercises as mockExercises } from "../../../../mock/exercises";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormWorkout = ({ title, onSubmit }: Props): JSX.Element => {
  const initState: FormType = {
    time: "",
    date: new Date().toString(),
    exercises: "",
  };

  const initStateErrors: any = {};

  const [form, setForm] = useState(initState);
  const [errors, setErrors] = useState(initStateErrors);

  const onChange = (name: string, value: string) => {
    setForm({ ...form, [`${name}`]: value });
  };

  const submit = async () => {
    const validate = await validation(form);

    setErrors(initStateErrors);
    if (validate) {
      toast('Exercise added')
      onSubmit(form);
      setForm(initState);
    } else {
      const formError = await formErrors(form);

      if (formError) {
        setErrors(formError);
      }
    }
  };

  return (
    <>
      <Form title={title}>
        <Container>
          <Row columnsDesktop={4} columnsTablet={1} columnsMobile={1}>
            <Col>
              <TextInput
                name="time"
                type="number"
                value={form["time"]}
                onChange={onChange}
                error={errors && errors["time"]}
                placeholder={"Hours"}
                
              />
            </Col>
            <Col>
              <Datepicker onChange={onChange} name="date" />
            </Col>
            <Col>
              <Select
                name="exercises"
                onChange={onChange}
                label={"Select Exercise"}
                value={form["exercises"]}
                options={mockExercises}
                error={errors && errors["exercises"]}
              />
            </Col>
            <Col>
              <Button type="submit" onClick={() => submit()} text={"Add"} />
            </Col>
          </Row>
        </Container>
      </Form>
      <ToastContainer />
    </>
  );
};

export default FormWorkout;
