import * as React from 'react';
import { Endpoint } from '@/components/markdoc/Endpoint';
import { Parameter } from '@/components/markdoc/Parameter';
import { Response } from '@/components/markdoc/Response';
import { Heading } from '@/components/markdoc/Heading';

export const components = {
  Heading,
  Endpoint,
  Parameter,
  Response,
  a: ({ children, href, ...props }: any) => (
    <a href={href} className="text-primary hover:underline" {...props}>
      {children}
    </a>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  ),
  article: ({ children }: { children: React.ReactNode }) => (
    <article className="prose dark:prose-invert">{children}</article>
  ),
}; 