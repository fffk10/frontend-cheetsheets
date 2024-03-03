'use client'

import { Box, Heading, Icon, Stack } from '@chakra-ui/react'
import { TbBrandVscode } from 'react-icons/tb'
import MdxContent from '@/app/contents/vscode/page.mdx'

export default function VSCode() {
  return (
    <Box as='main' h='100%' p={5}>
      <MdxContent />
    </Box>
  )
}
