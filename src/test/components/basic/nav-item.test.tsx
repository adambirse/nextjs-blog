import * as React from 'react';
import { shallow } from 'enzyme';
import Link from 'next/link';
import { NavItem } from '../../../components/basic/nav-item';
var chai = require('chai');
var expect = chai.expect;

describe('Nav Item component', () => {
  it('should render with data', function () {
    const wrap = shallow(<NavItem link="/my-link" text="my-text" />);
    assertLink(wrap, '/my-link', 'my-text');
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
