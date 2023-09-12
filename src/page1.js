import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme,} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Center, Square, Circle, Heading, Divider, Button, Text, SimpleGrid  } from '@chakra-ui/react'

const Page1 = () => {



  return (<ChakraProvider>

  
<Center >
  

<Heading as='h1' >I'm a Heading new</Heading>
</Center>


<Center height='50px'>
  <Divider orientation='vertical' />
</Center>




<Container maxW='2xl'  centerContent>

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

<Center height='50px'>
  <Divider orientation='vertical' />
</Center>
</Container>
          
    
    </ChakraProvider>)

};

    export default Page1;