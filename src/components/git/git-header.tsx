import Link from 'next/link';
import React, { useState } from 'react';

interface GitOverviewProps {
  name: string;
  repoCount?: number;
}

export const GitHeader: React.FC<GitOverviewProps> = ({ name, repoCount }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <section>
      <div>
        <Link href={`https://github.com/${name}/`}>
          <a target="_blank">My git hub account</a>
        </Link>
        <p
          id="clickable"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Click for more details.
          {repoCount && toggle && (
            <p id="repos">
              <p>{repoCount} public repositories.</p>
            </p>
          )}
        </p>
      </div>
    </section>
  );
};
