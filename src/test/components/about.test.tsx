import * as React from "react";
import { shallow } from "enzyme";
import { About } from "../../components/about";
const chai = require("chai");
const expect = chai.expect;

describe("About component", () => {
  it("should render without throwing an error", function () {
    const wrap = shallow(<About />);
    expect(wrap.find("p").text()).to.equal("About me");
  });
});
