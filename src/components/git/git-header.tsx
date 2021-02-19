import Link from "next/link";
import React from "react";
import { git_account } from "../../config/customisation";

export const GitHeader: React.FC = () => {
  return (
    <section>
      <p>
        <Link href={`https://github.com/${git_account}/`}>
          <a target="_blank">My git hub account</a>
        </Link>
      </p>
    </section>
  );
};
