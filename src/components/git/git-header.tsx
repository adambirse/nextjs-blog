import Link from 'next/link';
import React from 'react';
import { Accordion } from '../accordion/accordion';
import { Paragraph } from '../basic/paragraph';

interface GitOverviewProps {
  name: string;
  repoCount?: number;
}

export const GitHeader: React.FC<GitOverviewProps> = ({ name, repoCount }) => {
  return (
    <Accordion title={'Overview'}>
      <section>
        <Link href={`https://github.com/${name}/`}>
          <a target="_blank">account</a>
        </Link>
        {repoCount && <Paragraph id="repos">{repoCount} public repositories.</Paragraph>}
      </section>
    </Accordion>
  );
};
