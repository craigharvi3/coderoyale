// import React from "react";
// import { expect } from "chai";
// import { shallow } from "enzyme";
// import Header from "../../src/components/Header";
// import Logo from "../../src/components/Logo";

// describe("Header", () => {
//   it("renders a Header and Logo", () => {
//     const wrapper = shallow(<Header />);
//     const node = wrapper.find(".header");
//     const logoNode = wrapper.find(Logo);

//     expect(node.exists()).to.be.true;
//     expect(logoNode.exists()).to.be.true;
//   });

//   it("renders nav items", () => {
//     const wrapper = shallow(
//       <Header
//         navItems={[
//           {
//             icon: "search",
//             href: "/hello",
//             text: "Search"
//           }
//         ]}
//       />
//     );
//     const node = wrapper.find(".header__nav .header__link");

//     expect(node.exists()).to.be.true;
//   });
// });
