import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/index';
const chai = require('chai');
const expect = chai.expect;

const allPostsData = [
  { id: 1, date: '12/1/2011', title: 'title' },
  { id: 2, date: '12/1/2011', title: 'title2' },
];

describe('Index page', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<Home allPostsData={allPostsData} />);
  });
});
