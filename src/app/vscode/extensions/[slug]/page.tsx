'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { allVSCodeExtensions } from 'contentlayer/generated'

export default function Slug({ params }: { params: { slug: string } }) {
  console.log(`vscode=${JSON.stringify(allVSCodeExtensions)}`)
  const doc = allVSCodeExtensions.find((doc) => doc.slug == params.slug)
  console.log(`doc=${JSON.stringify(doc)}`)
  if (!doc) return <h2>not found</h2>

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXComponent = useMDXComponent(doc?.body.code)

  return <MDXComponent />
}
