import React from 'react';
import { Accordion } from '../accordion/accordion';
import { Paragraph } from '../basic/paragraph';
const utilStyles = require('../../styles/utils.module.scss');

interface CVListingProps {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export const CVListing: React.FC<CVListingProps> = ({ company, role, startDate, endDate, description }) => {
  return (
    <section className={utilStyles.headingMd}>
      <Accordion title={formatTitle(company, role, startDate, endDate)}>
        <Paragraph id="cvListing">{description}</Paragraph>
      </Accordion>
    </section>
  );
};
function formatTitle(company: string, role: string, startDate: string, endDate?: string): string {
  return endDate ? `${company} - ${role} - ${startDate} - ${endDate}` : `${company} - ${role} - ${startDate} - present`;
}
