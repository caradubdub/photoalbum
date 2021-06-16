import React from "react";
import { shallow } from "enzyme";
import AlbumList from "./AlbumList";

describe("AlbumList", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<AlbumList />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
