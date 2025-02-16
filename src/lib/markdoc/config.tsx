import type { Config } from '@markdoc/markdoc';
import { Endpoint } from '@/components/markdoc/Endpoint';
import { Parameter } from '@/components/markdoc/Parameter';
import { Response } from '@/components/markdoc/Response';
import { Heading } from '@/components/markdoc/Heading';
import { tags } from '@/lib/markdoc/config/tags';
import * as React from 'react';

export const config = {
  tags,
  nodes: {
    document: {
      render: 'article',
    },
    heading: {
      render: 'Heading',
      attributes: {
        level: { type: Number, required: true },
        id: { type: String },
      },
    },
    paragraph: {
      render: 'p',
    },
    link: {
      render: 'a',
      attributes: {
        href: { type: String, required: true },
        title: { type: String },
      },
    },
  },
  variables: {
    environment: process.env.NODE_ENV,
  },
} satisfies Config;

export const components = {
  Heading,
  Endpoint,
  Parameter,
  Response,
  a: ({ children, href, ...props }: { 
    children: React.ReactNode; 
    href: string;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
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