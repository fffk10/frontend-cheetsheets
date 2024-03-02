'use client'

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

export default function HamburgerButton() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Menu'
        icon={<HamburgerIcon />}
        variant='unstyled'
      />
      <MenuList>
        <MenuItem icon={<AddIcon />}>New Tab</MenuItem>
        <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
        <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
        <MenuItem icon={<EditIcon />}>Open File...</MenuItem>
      </MenuList>
    </Menu>
  )
}
