import * as React from 'react';
import { shallow } from 'enzyme';
import { GitHeader } from '../../../components/git/git-header';
const chai = require('chai');
const expect = chai.expect;

describe('Git header component', () => {
  it('should render initially not showing additional data', function () {
    const wrap = shallow(<GitHeader name="myname" repoCount={3} />);
    expectLinkToGithub(wrap);
    expect(wrap.find('#repos').length == 0).to.be.true;
  });

  it('when clicked should show additional data', function () {
    const wrap = shallow(<GitHeader name="myname" repoCount={3} />);
    expectLinkToGithub(wrap);
    expandAccordion(wrap);
    expect(wrap.find('#repos').text()).to.equal('3 public repositories.');
  });

  it('should render with only a repo name', function () {
    const wrap = shallow(<GitHeader name="myname" />);
    expectLinkToGithub(wrap);
  });
});

const expectLinkToGithub = (wrap: any) => {
  expect(wrap.find('a').text()).to.equal('My git hub account');
  expect(wrap.find('Link').prop('href')).to.equal('https://github.com/myname/');
};
const expandAccordion = (wrap: any) => {
  expect(wrap.find('#repos').length == 0).to.be.true;
  wrap.find('#clickable').simulate('click');
};
