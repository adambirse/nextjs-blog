import React, { useState, useRef } from 'react';
import { Chevron } from './chevron';

const styles = require('./accordion.module.scss');

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }): JSX.Element => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState(`${styles.accordion__icon}`);

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setActive === 'active' ? `${styles.accordion__icon}` : `${styles.accordion__icon} ${styles.rotate}`);
  };

  const getChildContent = (children: React.ReactNode | string) => {
    if (typeof children === 'string') {
      return (
        <div ref={content} style={{ maxHeight: `${setHeight}` }} className={styles.accordion__content}>
          {
            <div className={styles.accordion__text}>
              <p dangerouslySetInnerHTML={{ __html: children || '' }} />
            </div>
          }
        </div>
      );
    } else {
      return (
        <div ref={content} style={{ maxHeight: `${setHeight}` }} className={styles.accordion__content}>
          {<div className={styles.accordion__text}>{children}</div>}
        </div>
      );
    }
  };

  return (
    <div className={styles.accordion__section}>
      <button className={`${styles.accordion} ${setActive}`} onClick={toggleAccordion}>
        <p className={styles.accordion__title}>{title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      {getChildContent(children)}
    </div>
  );
};
