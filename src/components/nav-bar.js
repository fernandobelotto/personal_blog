import * as React from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Stack,

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { navigate } from 'gatsby-link';

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Button onClick={() => navigate('/')} color="red.500">Fernando Belotto</Button>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>

                            <Button color={useColorModeValue('black', 'white')} onClick={() => navigate('/')}>Blog</Button>
                            <Button color={useColorModeValue('black', 'white')} onClick={() => navigate('/about')}>About</Button>
                            <Button color={useColorModeValue('black', 'white')} onClick={() => navigate('/projects')}>Projects</Button>

                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Button onClick={() => navigate('/')}>Blog</Button>
                            <Button onClick={() => navigate('/')}>About</Button>
                            <Button onClick={() => navigate('/')}>Projects</Button>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}