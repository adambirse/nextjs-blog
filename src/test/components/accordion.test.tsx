import * as React from 'react';
import { shallow } from 'enzyme';
import { Accordion } from '../../components/accordion/accordion';
import { Paragraph } from '../../components/basic/paragraph';
var chai = require('chai');
var expect = chai.expect;

describe('Accordion component', () => {
  it('should render title', function () {
    const wrap = shallow(<Accordion title="my title" children="content" />);
    expect(wrap.find('Paragraph').find({ id: 'title' }).length).to.equal(1);
  });

  it('should render content as string', function () {
    const wrap = shallow(<Accordion title="my title" children="content" />);
    expect(wrap.find('Paragraph').find({ id: 'content' }).length).to.equal(1);
  });

  it('should render content as html', function () {
    const wrap = shallow(
      <Accordion title="my title">
        <h1>a header</h1>
      </Accordion>
    );
    expect(wrap.find('Paragraph').find({ id: 'content' }).length).to.equal(1);
  });

  it('should render content as html', function () {
    const wrap = shallow(
      <Accordion title="my title">
        <section>{<Paragraph id="repos">{1} public repositories.</Paragraph>}</section>
      </Accordion>
    );
    expect(wrap.find('Paragraph').find({ id: 'content' }).length).to.equal(1);
  });
});
