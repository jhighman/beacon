export const tags = {
  endpoint: {
    render: 'Endpoint',
    attributes: {
      method: { type: String, required: true },
      path: { type: String, required: true },
      description: { type: String },
    },
  },
  parameter: {
    render: 'Parameter',
    attributes: {
      name: { type: String, required: true },
      type: { type: String, required: true },
      required: { type: Boolean, default: false },
      description: { type: String },
    },
  },
  response: {
    render: 'Response',
    attributes: {
      status: { type: Number, required: true },
      description: { type: String },
    },
  },
}; 