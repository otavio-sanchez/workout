import React from "react";
import Jest from "jest";
import { shallow } from "enzyme";
import { Table, TableRow, TableCol, TableColHead } from "../../table";

describe("Table components", () => {
  const props = {
    children: (
      <TableRow>
        <TableCol>table</TableCol>
      </TableRow>
    ),
    header: (
      <TableRow>
        <TableColHead>head</TableColHead>
      </TableRow>
    ),
  };

  it("should render table", () => {
    const wrapper = shallow(<Table {...props} />);
    expect(wrapper.find("table"));
  });

});
