import { DefaultDocumentNodeResolver } from 'sanity/structure'
import { Iframe } from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (schemaType === 'writeup') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc: any) => 
            doc?.slug?.current
              ? `/api/preview?secret=${process.env.SANITY_PREVIEW_SECRET}&slug=${doc.slug.current}`
              : `/api/preview?secret=${process.env.SANITY_PREVIEW_SECRET}`,
          reload: { button: true },
        })
        .title('Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}