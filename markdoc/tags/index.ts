import type { Schema } from '@markdoc/markdoc';

export const tags: Record<string, Schema> = {
  callout: {
    render: 'Callout',
    attributes: {
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning', 'error'],
      },
    },
  },
}; 