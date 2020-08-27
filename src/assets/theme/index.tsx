import React from "react";
import ResetCSS from "./resetCSS";
import MainStyle from "./mainStyle";

const Theme = (): JSX.Element => (
  <>
    <ResetCSS />
    <MainStyle />
  </>
);

export { Theme };
