import type { Config } from '@markdoc/markdoc';
import { tags } from '@/markdoc/tags';

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
    frontmatter: {},
  },
  functions: {
    getTitle: {
      transform(parameters) {
        const [title] = parameters;
        return String(title);
      },
    },
  },
} satisfies Config; 