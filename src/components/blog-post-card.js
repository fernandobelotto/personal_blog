
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
export default function BlogPostCard({ title, description, date, link }) {
  return (
    <>
      {/* <Center py={6}> */}
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="lg"
        rounded={'md'}
        p={6}
        width='100%'
        overflow={'hidden'}>
        <Stack>
          <Link to={link} >
            <Text
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              mb={2}
              fontFamily={'body'}>
              {title}
            </Text>
          </Link>
          <Text color={useColorModeValue('gray.500', 'white')}>
            {description}
          </Text>
          <Text color={useColorModeValue('gray.700', 'white')}>
            {date}
          </Text>
        </Stack>
      </Box>
      {/* </Center> */}
    </>
  );
}