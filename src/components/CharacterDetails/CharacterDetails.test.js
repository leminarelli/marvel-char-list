import React from "react";
import { shallow } from "enzyme";

import CharacterDetails from "./CharacterDetails";

describe("<CharacterDetails />", () => {
  let wrapper;

  test("mounts", () => {
    wrapper = shallow(<CharacterDetails />);

    expect(wrapper).toHaveLength(1);
  });
});
