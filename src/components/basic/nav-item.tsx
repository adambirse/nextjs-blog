import Link from 'next/link';
import React from 'react';

const navStyles = require('./navbar.module.scss');

interface NavItemProps {
  link: string;
  text: string;
}

export const NavItem: React.FC<NavItemProps> = ({ link, text }) => {
  return (
    <>
      <li className={navStyles.li}>
        <Link href={link}>
          <a>{text}</a>
        </Link>
      </li>
    </>
  );
};
