import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {structure} from './src/sanity/structure'
import {schemaTypes} from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'cybersecurity-terminal',
  title: 'Cybersecurity Terminal Studio',
  projectId: "krdursmh",
  dataset: "production",
  basePath: '/studio',
  plugins: [
    deskTool({structure}),
    visionTool(),
    codeInput(),     
  ],
  schema: {
    types: schemaTypes,
  },
})
