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

const FormWorkout = ({ title, onSubmit }: Props): JSX.Element => {
  const initState: FormType = {
    time: '',
    date: new Date().toString(),
    activities: "",
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
            />
          </Col>
          <Col>
            <Datepicker onChange={onChange} name="date" />
          </Col>
          <Col>
            <Select
              name="activities"
              onChange={onChange}
              value={form["activities"]}
              options={[
                {
                  value: "1",
                  key: "A",
                },
              ]}
              error={errors && errors["activities"]}
            />
          </Col>
          <Col>
            <Button type="submit" onClick={() => submit()} text={"Add"} />
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default FormWorkout;
