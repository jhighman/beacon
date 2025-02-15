import withMarkdoc from '@markdoc/next.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx', 'md'],
  experimental: {
    turbo: {
      rules: {
        // Opt-out of Turbopack for Markdoc files
        '*.md': ['@markdoc/next.js/node'],
      },
    },
  },
}

export default withMarkdoc({
  mode: 'static',
  schemaPath: './markdoc',
})(nextConfig)
