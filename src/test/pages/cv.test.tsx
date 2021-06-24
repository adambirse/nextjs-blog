import * as React from 'react';
import { shallow } from 'enzyme';
import CV from '../../pages/cv';
const chai = require('chai');
const expect = chai.expect;

describe('CV page', () => {
  it('should render with cv listing', function () {
    const wrap = shallow(<CV />);
    expect(wrap.find('CVListing').length).to.equal(2);
  });
});
