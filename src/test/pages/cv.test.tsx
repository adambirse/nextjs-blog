import * as React from 'react';
import { shallow } from 'enzyme';
import CV from '../../pages/cv';
const chai = require('chai');
const expect = chai.expect;


describe('CV page', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<CV/>);
    expect(wrap.find('h1').text()).to.equal('CV');
  });
});
