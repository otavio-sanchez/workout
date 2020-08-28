import React, {useEffect, useState, useCallback} from "react";
import { Col, Container, Row } from "../../../../components/grid";
import { Props } from "./types";
import { Form } from '../FormWorkout/types'

const CountExercises = ({ list }: Props): JSX.Element => {
 
    const hours = useState(null)

    // const countHours  = (list: Form[]) => {
    //     list.reduce((a, b) =>  a + b, 0)
    // }

    useEffect(()=>{
        // countHours(list)
    },[list])

  return (
 
      <Container>
        <Row columnsDesktop={1} columnsTablet={1} columnsMobile={1}>
          <Col>
      
          </Col>
        </Row>
      </Container>

  );
};

export default CountExercises;
