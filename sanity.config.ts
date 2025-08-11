import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './src/sanity/schemaTypes'
import { defaultDocumentNode } from './src/sanity/desk/preview';

export default defineConfig({
  name: 'nevis-portofolio',
  title: 'Cybersecurity Terminal Studio',
  projectId: "krdursmh",
  dataset: "production",
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) => S.list().title('Content').items([
        // Your structure items here
        S.listItem()
          .title('Writeups')
          .schemaType('writeup')
          .child(S.documentTypeList('writeup'))
      ]),
    }),
    defaultDocumentNode,
    visionTool(),
    codeInput(),     
  ],
  schema: {
    types: schemaTypes,
  },
})
