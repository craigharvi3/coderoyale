import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Grid from "../../src/components/Grid";
import ModuleTitle from "../../src/components/ModuleTitle";

describe("Grid", () => {
  it("renders a Grid and ModuleTitle", () => {
    const wrapper = mount(
      <Grid title="GridMate">
        <p>Grid item 1</p>
        <p>Grid item 2</p>
      </Grid>
    );
    const node = wrapper.find(".grid");
    const titleNode = wrapper.find(ModuleTitle);

    expect(node.exists()).to.be.true;
    expect(titleNode.exists()).to.be.true;
  });

  it("passes the classes into the component", () => {
    const wrapper = mount(
      <Grid title="GridMate" classes="i-am-a-class">
        <p>Grid item 1</p>
        <p>Grid item 2</p>
      </Grid>
    );
    const node = wrapper.find(".i-am-a-class");

    expect(node.exists()).to.be.true;
  });
});
