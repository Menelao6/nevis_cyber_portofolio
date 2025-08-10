import { StructureBuilder } from 'sanity/desk'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Write-ups').child(S.documentTypeList('writeup')),
      S.listItem().title('Categories').child(S.documentTypeList('category')),
    ])
