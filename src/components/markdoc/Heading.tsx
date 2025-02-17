import * as React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  id?: string;
}

export function Heading({ level = 1, children, id }: HeadingProps) {
  // Type the tag as a specific heading element (h1-h6)
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return React.createElement(
    Tag,
    { id, className: 'scroll-m-20' },
    children
  );
}