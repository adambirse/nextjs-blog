import * as React from 'react';
import { shallow } from 'enzyme';
import { GitHeader } from '../../../components/git/git-header';
const chai = require('chai');
const expect = chai.expect;

describe('Git header component', () => {
  it('should render with all data', function () {
    const wrap = shallow(<GitHeader name="myname" repoCount={3} />);
    expect(wrap.find('a').text()).to.equal('My git hub account');
    expect(wrap.find('#repos').text()).to.equal('3 public repositories.');
    expect(wrap.find('Link').prop('href')).to.equal('https://github.com/myname/');
  });

  it('should render with only a repo name', function () {
    const wrap = shallow(<GitHeader name="myname" />);
    expect(wrap.find('a').text()).to.equal('My git hub account');
    expect(wrap.find('Link').prop('href')).to.equal('https://github.com/myname/');
  });
});
