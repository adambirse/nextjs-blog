import * as React from "react";
import { shallow } from "enzyme";
import { GitHeader } from "../../../components/git/git-header";
const chai = require("chai");
const expect = chai.expect;

describe("Git header component", () => {
  it("should render without throwing an error", function () {
    const wrap = shallow(<GitHeader />);
    expect(wrap.find("a").text()).to.equal("My git hub account");
    expect(wrap.find("Link").prop("href")).to.equal(
      "https://github.com/adambirse/"
    );
  });
});
