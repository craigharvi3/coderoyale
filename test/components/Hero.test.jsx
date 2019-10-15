import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Hero from "../../src/components/Hero";

describe("Hero", () => {
  it("renders a Hero", () => {
    const wrapper = shallow(<Hero imageUrl="im-an-image.png" />);
    const node = wrapper.find(".hero");

    expect(node.exists()).to.be.true;
  });

  it("passes the classes into the component", () => {
    const wrapper = shallow(<Hero classes="i-am-a-class" />);
    const node = wrapper.find(".i-am-a-class");

    expect(node.exists()).to.be.true;
  });
});
