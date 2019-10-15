import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import SnippetItem from "../../src/components/SnippetItem";

describe("SnippetItem", () => {
  it("renders a SnippetItem", () => {
    const wrapper = shallow(
      <SnippetItem
        id="id"
        imageUrl="image.png"
        title="title"
        podcastTitle="Podcast Title"
      />
    );
    const node = wrapper.find(".snippet-item");

    expect(node.exists()).to.be.true;
  });

  it("passes the classes into the component", () => {
    const wrapper = shallow(
      <SnippetItem
        id="id"
        imageUrl="image.png"
        title="title"
        podcastTitle="Podcast Title"
        classes="i-am-a-class"
      />
    );
    const node = wrapper.find(".i-am-a-class");

    expect(node.exists()).to.be.true;
  });
});
