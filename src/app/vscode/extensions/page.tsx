'use client'

import { Box } from '@chakra-ui/react'
import MdxContent from '@/app/contents/vscode/extensions.mdx'

export default function Extensions() {
  return (
    <Box as='main' h='100%' p={5}>
      <MdxContent />
    </Box>
  )
}
