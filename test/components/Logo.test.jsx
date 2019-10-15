import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Logo from "../../src/components/Logo";

describe("Logo", () => {
  it("renders a Logo", () => {
    const wrapper = shallow(<Logo />);
    const node = wrapper.find(".logo");

    expect(node.exists()).to.be.true;
  });

  it("passes the classes into the component", () => {
    const wrapper = shallow(<Logo classes="i-am-a-class" />);
    const node = wrapper.find(".i-am-a-class");

    expect(node.exists()).to.be.true;
  });
});
