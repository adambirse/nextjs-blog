import Link from "next/link";
import React from "react";

const navStyles = require("./navbar.module.css");

export const NavBar: React.FC = () => {
  return (
    <>
      <ul className={navStyles.ul}>
        <li className={navStyles.li}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={navStyles.li}>
          <Link href="/git">
            <a>git hub statistics</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
