import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import AlbumList from "./components/AlbumList";

describe("App", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render the photo album list component", () => {
    expect(wrapper.containsMatchingElement(AlbumList).toEqual(true));
  });
});
