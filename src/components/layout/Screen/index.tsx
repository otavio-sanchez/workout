import React from "react";
import { Props } from "./types";
import { Content, Container } from "./style";
import Header from "../Header";

const Screen = ({ children, name }: Props): JSX.Element => {
  return (
    <Container>
      <Header name={name} />
      <Content>{children}</Content>
    </Container>
  );
};

export default Screen;
