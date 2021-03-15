import * as React from 'react';
import { mount } from 'enzyme';
var chai = require('chai');
var expect = chai.expect;
import Date from '../../components/date';

describe('Date component', () => {
  it('should render without throwing an error', function () {
    const wrap = mount(<Date dateString="2011-10-05T14:48:00.000Z" />);
    expect(wrap.find('time').text()).to.equal('October 5, 2011');
  });
});
