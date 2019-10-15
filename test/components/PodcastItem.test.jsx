import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import PodcastItem from "../../src/components/PodcastItem";

describe("PodcastItem", () => {
  it("renders a PodcastItem", () => {
    const wrapper = shallow(
      <PodcastItem id="id" imageUrl="image.png" title="title" />
    );
    const node = wrapper.find(".podcast-item");

    expect(node.exists()).to.be.true;
  });

  it("passes the classes into the component", () => {
    const wrapper = shallow(
      <PodcastItem
        id="id"
        imageUrl="image.png"
        title="title"
        classes="i-am-a-class"
      />
    );
    const node = wrapper.find(".i-am-a-class");

    expect(node.exists()).to.be.true;
  });
});
