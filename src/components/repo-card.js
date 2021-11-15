import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Center, Flex, Spacer, Stack, Text } from '@chakra-ui/layout'
import { HStack, LinkBox, LinkOverlay, Tag, Icon, Tooltip, Link, useClipboard, Button } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React from 'react'
import { topicIcons } from '../enums/topics'
export default function RepoCard({ data, number }) {

    function CopyButton({ url }) {

        const { hasCopied, onCopy } = useClipboard(`git clone ${url}`)

        return (
            <>
                <Button size='xs' onClick={onCopy}>
                    {hasCopied ? "Copied" : "Clone"}
                </Button>
            </>
        )
    }

    const {
        created_at,
        description,
        git_url,
        name,
        updated_at,
        svn_url,
        topics
    } = data
    return (
        <>
            {/* <LinkBox as="article"> */}
            <Box
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow="lg"
                rounded={'md'}
                p={6}
                width='100%'
                overflow={'hidden'}>
                <Stack>
                    <Box>
                        <Text
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            mb={2}
                            fontFamily={'body'}>
                            <Text fontSize='md'
                                m={0}
                                color={useColorModeValue('gray.400', 'white')}
                            >{number}</Text>
                            <Flex justify='space-between' alignItems='center'>

                                <Link href={svn_url} target='_blank'>
                                    {name}
                                </Link>
                                <Spacer />
                                <CopyButton url={git_url} />

                            </Flex>
                        </Text>
                    </Box>
                    <Text color={useColorModeValue('gray.500', 'white')}>
                        {description}
                    </Text>
                    {/* <Text color={useColorModeValue('gray.700', 'white')}>
                        created at: {dayjs(created_at).format('DD/MM/YYYY')}
                    </Text>
                    <Text color={useColorModeValue('gray.700', 'white')}>
                        updated at: {dayjs(created_at).format('DD/MM/YYYY')}
                    </Text> */}
                    <HStack>
                        {topics?.map(topic => {
                            return (
                                <>
                                    <Tooltip label={topic}>
                                        <Box>
                                            <Icon as={topicIcons[topic]} />
                                        </Box>
                                    </Tooltip>
                                </>
                            )
                        })}
                    </HStack>
                </Stack>
            </Box>
            {/* </LinkBox> */}

        </>
    )
}
