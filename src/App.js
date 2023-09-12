import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Card, CardHeader, CardBody, CardFooter, Heading, Button } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>

<Card align='center'>
  <CardHeader>
    <Heading size='md'> Customer dashboard</Heading>
  </CardHeader>
  <CardBody>
    <Text>View a summary of all your customers over the last month.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme='blue'>View here</Button>
  </CardFooter>
</Card>
    </ChakraProvider>
  );
}

export default App;
