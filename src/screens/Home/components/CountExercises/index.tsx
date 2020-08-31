import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "../../../../components/grid";
import { Props } from "./types";
import { Form } from "../FormWorkout/types";
import { Text } from "../../../../components/typography";
import { Content } from './style'
 
const CountExercises = ({ list }: Props): JSX.Element => {
  const [hours, setHours] = useState(0);

  const countHours = (list: Form[]) => {
    const total = list.reduce((a, b): number => a + parseFloat(b.time), 0);

    setHours(total);
  };

  useEffect(() => {
    countHours(list);
  }, [list]);

  return (
    <Container>
      <Row columnsDesktop={1} columnsTablet={1} columnsMobile={1}>
        <Col>
          <Content>
            <Text type="regular">
              {hours > 0 &&
                `${hours.toFixed(1).toString()} ${
                  hours > 1 ? "hours" : "hour"
                } of exercise`}
            </Text>
          </Content>
        </Col>
      </Row>
    </Container>
  );
};

export default CountExercises;
