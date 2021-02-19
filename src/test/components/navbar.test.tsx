import * as React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../components/navbar';
import Link from 'next/link';
var chai = require('chai');
var expect = chai.expect;

describe('Nav bar component', () => {
  it('should render with data', function () {
    const wrap = shallow(<NavBar />);

    assertLink(wrap, '/', 'Home');
    assertLink(wrap, '/git', 'git hub statistics');
  });
});

const assertLink = (wrap: any, href: string, name: string) => {
  expect(
    wrap.containsMatchingElement(
      <Link href={href}>
        <a>{name}</a>
      </Link>
    )
  ).to.be.true;
};
