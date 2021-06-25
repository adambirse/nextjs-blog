import * as React from 'react';
import { shallow } from 'enzyme';
import { Accordion } from '../../components/accordion/accordion';
var chai = require('chai');
var expect = chai.expect;

describe('Accordion component', () => {
  it('should render title', function () {
    const wrap = shallow(<Accordion title="my title" children="children" />);
    expect(wrap.find('Paragraph').find({ id: 'title' }).length).to.equal(1);
  });

  it('should render content as string', function () {
    const wrap = shallow(<Accordion title="my title" children="children" />);
    expect(wrap.find('Paragraph').find({ shouldUseDangerouslySetInnerHTML: true }).length).to.equal(1);
  });

});


