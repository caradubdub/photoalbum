import React from "react";
import { shallow } from "enzyme";
import AlbumView from "./AlbumView";

describe("AlbumView", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AlbumView />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
