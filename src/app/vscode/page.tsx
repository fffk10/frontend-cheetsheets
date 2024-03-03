'use client'

import { Box, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { TbBrandVscode } from 'react-icons/tb'

export default function VSCode() {
  return (
    <Box as='main' h='100%' p={5}>
      <Heading fontSize='3xl' mb={2}>
        <Icon as={TbBrandVscode} verticalAlign='middle' />
        VSCode
      </Heading>

      <Stack></Stack>
    </Box>
  )
}
