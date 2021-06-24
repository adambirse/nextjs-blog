import * as React from 'react';
import { shallow } from 'enzyme';
const chai = require('chai');
const expect = chai.expect;
import { CVListing } from '../../../components/cv/cvListing';

describe('CV listing component', () => {
  const jobDescription = 'This is what I did.';

  it('should render title with miminmal properties', function () {
    const wrap = shallow(
      <CVListing company="company" role="Engineer" startDate="12/12/2021" description={jobDescription} />
    );
    const accordionComponent = wrap.find('MarkdownAccordion');
    expect(accordionComponent.props().title).to.equal('company - Engineer - 12/12/2021 - present');
  });

  it('should render title with full properties', function () {
    const wrap = shallow(
      <CVListing
        company="company"
        role="Engineer"
        startDate="12/12/2021"
        endDate="12/12/2022"
        description={jobDescription}
      />
    );
    const accordionComponent = wrap.find('MarkdownAccordion');
    expect(accordionComponent.props().title).to.equal('company - Engineer - 12/12/2021 - 12/12/2022');
  });
  it('should render job description', function () {
    const wrap = shallow(
      <CVListing
        company="company"
        role="Engineer"
        startDate="12/12/2021"
        endDate="12/12/2022"
        description={jobDescription}
      />
    );
    const accordionComponent = wrap.find('MarkdownAccordion');
    expect(accordionComponent.props().markdown).to.equal(jobDescription);
  });
});
