import * as React from 'react';
import { shallow } from 'enzyme';
import { GitHeader } from '../../../components/git/git-header';
import Link from 'next/link';
const chai = require('chai');
const expect = chai.expect;
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Paragraph } from '../../../components/basic/paragraph';

describe('Git header component', () => {
  it('should render with title', function () {
    const accordionComponent = renderAndGetAccordion();
    expect(accordionComponent.length == 1).to.be.true;
    expect(accordionComponent.props().title).to.equal('Overview');
  });

  it('should render initially with repos content', function () {
    const accordionComponent = renderAndGetAccordion(3);
    expect(reactElementToJSXString(accordionComponent.props().children)).to.equal(
      reactElementToJSXString(getContentWithRepo(3))
    );
  });

  it('should render initially without repos content', function () {
    const accordionComponent = renderAndGetAccordion();
    expect(reactElementToJSXString(accordionComponent.props().children)).to.equal(
      reactElementToJSXString(getContentWithoutRepo())
    );
  });
});

const getContentWithRepo = (repoCount: number) => {
  return (
    <section>
      <Link href={`https://github.com/myname/`}>
        <a target="_blank">account</a>
      </Link>
      <Paragraph id="repos">{repoCount} public repositories.</Paragraph>
    </section>
  );
};

const getContentWithoutRepo = () => {
  return (
    <section>
      <Link href={`https://github.com/myname/`}>
        <a target="_blank">account</a>
      </Link>
    </section>
  );
};

function renderAndGetAccordion(repoCount?: number) {
  const wrap = repoCount
    ? shallow(<GitHeader name="myname" repoCount={repoCount} />)
    : shallow(<GitHeader name="myname" />);
  return wrap.find('Accordion');
}
