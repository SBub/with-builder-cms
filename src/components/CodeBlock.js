import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { Builder, withBuilder } from '@builder.io/react'

const CodeBlockComponent = ({ language, code }) => {
  return <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
}

// Builder.registerComponent(CodeBlock, {
//   name: 'Code Block',
//   inputs: [
//     {
//       name: 'code',
//       type: 'string',
//       defaultValue: 'const incr = num => num + 1'
//     },
//     {
//       name: 'language',
//       type: 'string',
//       defaultValue: 'javascript'
//     }
//   ]
// })

export const CodeBlock = withBuilder(CodeBlockComponent, {
  name: 'Input Examples',
  inputs: [
    { name: 'text', type: 'string' },
    { name: 'switch', type: 'boolean' },
    { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'png'] },
    {
      name: 'exampleList',
      type: 'list',
      subFields: [{ name: 'text', type: 'string' }]
    }
  ]
})
