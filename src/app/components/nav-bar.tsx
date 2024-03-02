'use client'

import Logo from '@/app/components/logo'
import { RxComponent2 } from 'react-icons/rx'
import { TbBrandVscode } from 'react-icons/tb'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  useMediaQuery,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  Box,
  Icon,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { Link } from '@chakra-ui/next-js'

export default function NavBar() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  const Header = (): JSX.Element | null => {
    // if (isLargerThan600 || isOpen) {
    //   return null
    // }

    return (
      <Flex
        as='header'
        align='center'
        padding='1rem'
        borderBottom='1px solid'
        borderColor='gray.200'
      >
        <Logo />
        <Button ref={btnRef} variant='unstyled' onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      </Flex>
    )
  }

  const SideMenu = (): JSX.Element => {
    return (
      <>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose} size='xs'>
          <DrawerContent>
            <DrawerHeader>
              <Logo />
              <DrawerCloseButton />
            </DrawerHeader>

            <DrawerBody>
              <Flex h='100%'>
                {/* main menu */}
                <Box
                  h='100%'
                  w='50%'
                  borderRight='1px'
                  borderRightColor='gray.100'
                >
                  <Box>
                    <Link href='/components'>
                      <Icon as={RxComponent2} verticalAlign='middle' />
                      Components
                    </Link>
                  </Box>
                  <Box>
                    <Link href='/vscode'>
                      <Icon as={TbBrandVscode} verticalAlign='middle' />
                      VSCode
                    </Link>
                  </Box>
                </Box>
              </Flex>
            </DrawerBody>

            {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <>
      <Header />
      <SideMenu />
    </>
  )
}
