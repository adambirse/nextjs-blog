import Link from 'next/link';
import React from 'react';

interface GitOverviewProps {
  name: string;
}

export const GitHeader: React.FC<GitOverviewProps> = ({ name }) => {
  return (
    <section>
      <p>
        <Link href={`https://github.com/${name}/`}>
          <a target="_blank">My git hub account</a>
        </Link>
      </p>
    </section>
  );
};
