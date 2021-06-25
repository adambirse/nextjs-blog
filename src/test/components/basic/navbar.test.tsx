import * as React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../../components/basic/navbar';
var chai = require('chai');
var expect = chai.expect;

describe('Nav Bar component', () => {
  it('should render with correct no of links', function () {
    const wrap = shallow(<NavBar />);
    expect(wrap.find('NavItem').length).to.equal(3);
  });
});
