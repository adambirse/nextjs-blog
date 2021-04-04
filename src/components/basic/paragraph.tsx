import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  id?: string;
  shouldUseDangerouslySetInnerHTML?: boolean;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ id, children, shouldUseDangerouslySetInnerHTML, className }) => {
  if (typeof children === 'string') {
    if (shouldUseDangerouslySetInnerHTML) {
      return <p id={id} className={className} dangerouslySetInnerHTML={{ __html: children || '' }} />;
    } else {
      return (
        <p id={id} className={className}>
          {children}
        </p>
      );
    }
  }

  return (
    <p id={id} className={className}>
      {children}
    </p>
  );
};
