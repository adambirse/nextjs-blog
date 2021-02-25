import Link from 'next/link';
import React from 'react';

interface GitOverviewProps {
  name: string;
  repoCount?: number;
}

export const GitHeader: React.FC<GitOverviewProps> = ({ name, repoCount }) => {
  return (
    <section>
      <p>
        <Link href={`https://github.com/${name}/`}>
          <a target="_blank">My git hub account</a>
        </Link>
        {repoCount && (
          <div id="repos">
            <p>{repoCount} public repositories.</p>
          </div>
        )}
      </p>
    </section>
  );
};
