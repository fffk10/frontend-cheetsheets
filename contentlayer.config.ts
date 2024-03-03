import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const VSCodeExtensions = defineDocumentType(() => ({
  name: 'VSCodeExtensions',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    slug: {
      type: 'string',
      description: '機能名',
      required: true,
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/app/contents/vscode/extensions',
  documentTypes: [VSCodeExtensions],
})
