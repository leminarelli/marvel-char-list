import React from "react";
import { shallow } from "enzyme";

import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  let wrapper;

  test("mounts", () => {
    wrapper = shallow(<LoginForm />);

    expect(wrapper).toHaveLength(1);
  });
});
