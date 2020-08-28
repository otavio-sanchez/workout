import React, { useState, useEffect, FormEvent } from "react";
import {
  Form,
  TextInput,
  Button,
  Datepicker,
  Select,
} from "../../../../components/form";
import { Col, Container, Row } from "../../../../components/grid";
import { Props } from "./types";

const FormWorkout = ({ title, onSubmit }: Props): JSX.Element => {
  const initState = {
    time: "",
    date: new Date().toString(),
    activities: "",
  };

  const [form, setForm] = useState(initState);

  const onChange = (name: string, value: string) => {
    setForm({ ...form, [`${name}`]: value });
  };

  const submit = () => {
    onSubmit(form);
    setForm(initState);
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
            />
          </Col>
          <Col>
            <Datepicker onChange={onChange} name="date" />
          </Col>
          <Col>
            <Select
              name="activities"
              onChange={onChange}
              options={[
                {
                  value: "1",
                  key: "A",
                },
              ]}
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
