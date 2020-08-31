import React from "react";
import { Props } from "./types";
import { HeaderContent, Logo } from "./style";

const Header = ({ name }: Props): JSX.Element => {
  return (
    <HeaderContent>
      <Logo href="#" title={name}>
        Workout <span>Log</span>
      </Logo>
    </HeaderContent>
  );
};

export default Header;
