import * as React from 'react';
import { shallow } from 'enzyme';
import CV from '../../pages/cv';
const chai = require('chai');
const expect = chai.expect;

const cvEntries = [
  {
    id: 'job-one',
    content: 'content',
    date: '2019-01-01',
    company: 'Company one',
    role: 'Engineer',
    start_date: '2020-01-01',
    end_date: '2020-01-01'
  },
  {
    id: 'job-two',
    content: 'content',
    date: '2015-01-01',
    company: 'Company two',
    role: 'Tech lead',
    start_date: '2020-01-01',
    end_date: '2020-01-01'
  }
]


describe('CV page', () => {
  it('should render with cv listing', function () {
    const wrap = shallow(<CV cvEntries={cvEntries} />);
    expect(wrap.find('CVListing').length).to.equal(cvEntries.length);
  });
});
