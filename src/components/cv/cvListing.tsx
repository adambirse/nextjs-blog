import React from 'react';
import { MarkdownAccordion } from '../accordion/markdownAccordion';
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
      <MarkdownAccordion title={formatTitle(company, role, startDate, endDate)} markdown={description}/>
    </section>
  );
};
function formatTitle(company: string, role: string, startDate: string, endDate?: string): string {
  return endDate ? `${company} - ${role} - ${startDate} - ${endDate}` : `${company} - ${role} - ${startDate} - present`;
}
