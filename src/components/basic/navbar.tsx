import React from 'react';
import { NavItem } from './nav-item';

const navStyles = require('./navbar.module.scss');

export const NavBar: React.FC = () => {
  return (
      <ul className={navStyles.ul}>
        <NavItem link="/" text="Home" />
        <NavItem link="/cv" text="CV" />
        <NavItem link="/git" text="Github" />
      </ul>
  );
};
