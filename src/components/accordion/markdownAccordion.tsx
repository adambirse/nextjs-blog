import React, { useState, useRef } from 'react';
import { Chevron } from './chevron';
import { Paragraph } from '../basic/paragraph';
import ReactMarkdown from 'react-markdown';

const styles = require('./accordion.module.scss');

interface MarkdownAccordionProps {
  title: string;
  markdown: string;
}

export const MarkdownAccordion: React.FC<MarkdownAccordionProps> = ({ title, markdown }): JSX.Element => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState(`${styles.accordion__icon}`);

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setActive === 'active' ? `${styles.accordion__icon}` : `${styles.accordion__icon} ${styles.rotate}`);
  };


  return (
    <div className={styles.accordion__section}>
      <button className={`${styles.accordion} ${setActive}`} onClick={toggleAccordion}>
        <Paragraph className={styles.accordion__title}>{title}</Paragraph>
        <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className={styles.accordion__content}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    </div>
  );
};
