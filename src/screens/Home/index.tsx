import React from "react";
import {
  Form,
  TextInput,
  Button,
  Datepicker,
  Select,
} from "../../components/form";
import { Col, Container, Row } from "../../components/grid";

const Home = (): JSX.Element => {
  return (
    <Form title="Insert on Item">
      <Container>
        <Row columnsDesktop={4} columnsTablet={1} columnsMobile={1}>
          <Col>
            <TextInput
              name="time"
              type="number"
              value={"0"}
              onChange={(value) => console.log(value)}
            />
          </Col>
          <Col>
            <Datepicker
              onChange={(date: any) => {
                console.log(date);
              }}
              name="date"
            />
          </Col>
          <Col>
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
          </Col>
          <Col>
            <Button onClick={() => {}} text={"Add"} />
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Home;
