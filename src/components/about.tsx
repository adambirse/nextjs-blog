import React from 'react';
import { Accordion } from './accordion/accordion';
const utilStyles = require('../styles/utils.module.css');

export const About: React.FC = () => {
  return (
    <section className={utilStyles.headingMd}>
      <Accordion title={'About me'} content={'I am a software engineer.'}></Accordion>
    </section>
  );
};
