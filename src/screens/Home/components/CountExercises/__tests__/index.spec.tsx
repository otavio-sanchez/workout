import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import CountExercises from "../../CountExercises";
import { Props } from "../types";
import { listExercises } from "../../../../../constants/mock/exercises";
import { Text } from "../../../../../components/typography";
import { withHooks } from "jest-react-hooks-shallow";

describe("CountExercises", () => {
  const props: Props = {
    list: listExercises,
  };


  it("should render CountExercises component", () => {
    const wrapper = shallow(<CountExercises {...props} />);
    expect(wrapper.find(Text)).toHaveLength(1);
  });

  it("should render feedback when there count data", () => {
    withHooks(() => {
      const wrapper = shallow(<CountExercises {...props} />);
      wrapper.setProps({ list: listExercises });
      expect(wrapper.find(Text).get(0).props.children).toContain(
        "3.0 hours of exercise"
      );
    });
  });

  it("should render feedback when there is not data", () => {
    const wrapper = shallow(<CountExercises {...props} />);
    wrapper.setProps({ list: [] });
    expect(wrapper.find(Text).get(0).props.children).toContain(" ");
  });

  it("should render with return count", () => {
    const wrapper = mount(<CountExercises {...props} />);
    expect(wrapper.find(Text).length).toEqual(1);
  });
});
