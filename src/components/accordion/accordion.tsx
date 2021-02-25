import React, { useState, useRef } from 'react';
import { Chevron } from './chevron';

const styles = require('./accordion.module.css');

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion: React.FC<AccordionProps> = (props) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  }

  return (
    <div className={styles.accordion__section}>
      {/* className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} */}

      <button className={`${styles.accordion} ${setActive}`} onClick={toggleAccordion}>
        <p className={styles.accordion__title}>{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className={styles.accordion__content}>
        <div className={styles.accordion__text} dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  );
};
