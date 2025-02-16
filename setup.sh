#!/bin/bash

# Install dependencies
npm install next@15.1.7 react@19.0.0 react-dom@19.0.0

# Install UI and styling dependencies
npm install class-variance-authority@0.7.1 clsx@2.1.1 tailwind-merge@3.0.1 tailwindcss-animate@1.0.7
npm install @radix-ui/react-accordion@1.2.3 @radix-ui/react-dialog@1.1.6 @radix-ui/react-label@2.1.2
npm install @radix-ui/react-scroll-area@1.2.3 @radix-ui/react-separator@1.1.2 @radix-ui/react-slot@1.1.2
npm install @radix-ui/react-tabs@1.1.3 @radix-ui/react-tooltip@1.1.8
npm install lucide-react@0.475.0 next-themes@0.4.4 react-icons@5.4.0

# Install documentation and markdown dependencies
npm install @code-hike/lighter@1.0.3 @markdoc/markdoc@0.5.1 @markdoc/next.js@0.3.7
npm install @sindresorhus/slugify@2.2.1 globby@14.1.0 gray-matter@4.0.3
npm install zod@3.24.2 zod-matter@0.1.1

# Install dev dependencies
npm install -D @tailwindcss/typography@0.5.16 @types/node@20.17.19 @types/react@19.0.8 
npm install -D @types/react-dom@19 autoprefixer@10.4.20 postcss@8.5.2 tailwindcss@4.0.6 
npm install -D typescript@5 @eslint/eslintrc@3 eslint@9 eslint-config-next@15.1.7

# Create required directories
mkdir -p content/docs
mkdir -p src/hooks
mkdir -p markdoc

# Set up environment if .env.example exists
if [ -f .env.example ]; then
    cp .env.example .env.local
fi

# Create getting-started.md with markdown example
cat > content/docs/getting-started.md << 'EOL'
---
title: Markdown Syntax Guide
description: A comprehensive guide to Markdown syntax
tags: [markdown, syntax, guide]
order: 1
---

# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

![This is an alt text.](/image/sample.webp "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

EOL 