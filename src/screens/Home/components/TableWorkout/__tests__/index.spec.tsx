import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import TableWorkout from "../../TableWorkout";
import { Props } from "../types";
import { listExercises } from "../../../../../constants/mock/exercises";
import { Table, TableCol } from "../../../../../components/table";
import { withHooks } from "jest-react-hooks-shallow";

describe("TableWorkout", () => {
  const props: Props = {
    list: listExercises,
    removeExercise: () => {},
  };

  it("renders without crashing given the required props", () => {
    const wrapper = shallow(<TableWorkout {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render TableWorkout component", () => {
    const wrapper = shallow(<TableWorkout {...props} />);
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it("should render feedback", () => {
    withHooks(() => {
      const wrapper = shallow(<TableWorkout {...props} />);
      console.log(wrapper.find(Table).get(0).props.childre);
      expect(wrapper.find(TableCol).get(0).props.children).toContain("2 hours");
    });
  });

});
