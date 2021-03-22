import * as React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../components/about';
const chai = require('chai');
const expect = chai.expect;

describe('About component', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<About />);
    const accordionComponent = wrap.find('Accordion');
    expect(accordionComponent.length == 1).to.be.true;
    expect(accordionComponent.props().title).to.equal('About me');
    expect(accordionComponent.props().children).to.equal('I am a software engineer.');
  });
});
