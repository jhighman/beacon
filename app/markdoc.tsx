import { Config } from '@markdoc/markdoc';
import { Endpoint } from '@/components/markdoc/Endpoint';
import { Parameter } from '@/components/markdoc/Parameter';
import { Response } from '@/components/markdoc/Response';
import { tags } from '@/markdoc/tags';

export const config: Config = {
  tags,
  nodes: {
    document: {
      render: undefined,
    },
    heading: {
      render: 'Heading',
      attributes: {
        level: { type: Number, required: true },
        id: { type: String },
      },
    },
  },
  variables: {
    environment: process.env.NODE_ENV,
  },
};

// Map of Markdoc components
export const components = {
  Endpoint,
  Parameter,
  Response,
}; 