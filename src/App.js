import React from 'react';
import {
  ChakraProvider,Box,Text,Link,VStack,Code,Grid,theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, SimpleGrid, Container, Divider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider theme={theme}>

<Heading as='h1' size='4xl' noOfLines={1}>I'm a Heading</Heading>


<Divider orientation='vertical' />


<Container maxW='2xl' bg='blue.600' centerContent>

<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>

</Container>


    </ChakraProvider>
  );
}

export default App;
