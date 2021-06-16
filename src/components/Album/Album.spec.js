import React from "react";
import { shallow } from "enzyme";
import Album from "./Album";

describe("Album", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Album />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
