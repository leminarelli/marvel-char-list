import React from "react";
import { shallow } from "enzyme";

import CharactersList from "./CharactersList";

describe("<CharactersList />", () => {
  let wrapper;

  test("mounts", () => {
    wrapper = shallow(<CharactersList />);

    expect(wrapper).toHaveLength(1);
  });
});
