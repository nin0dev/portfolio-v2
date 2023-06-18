import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from './sanity/schemas'

const config = defineConfig({
  name: 'default',
  title: 'Portfolio | Nino Berber',

  projectId: 'iqpdtrr9',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config;