import React from 'react';
import { Accordion } from './accordion/accordion';
const utilStyles = require('../styles/utils.module.scss');

export const About: React.FC = () => {
  return (
    <section className={utilStyles.headingMd}>
      <Accordion title={'About me'} children={'I am a software engineer.'}></Accordion>
    </section>
  );
};
