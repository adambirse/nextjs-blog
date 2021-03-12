import Link from 'next/link';
import React from 'react';
import { Accordion } from '../accordion/accordion';

interface GitOverviewProps {
  name: string;
  repoCount?: number;
}

export const GitHeader: React.FC<GitOverviewProps> = ({ name, repoCount }) => {
  return (
    <>
      <Accordion title={'Overview'} content={getContent(name, repoCount)}></Accordion>
    </>
  );
};

const getContent = (name: string, repoCount: number) => {
  return (
    <>
      <section>
        <div>
          <Link href={`https://github.com/${name}/`}>
            <a target="_blank">account</a>
          </Link>
          {repoCount && (
            <p id="repos">
              <p>{repoCount} public repositories.</p>
            </p>
          )}
        </div>
      </section>
    </>
  );
};
