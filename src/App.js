import React from 'react';
import { ChakraProvider, theme,} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Container } from '@chakra-ui/react'
import Page1 from './page1';
import Page2 from './page2';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SimpleGrid, Box, Grid, GridItem, Center  } from '@chakra-ui/react';




function App() {
  return (<ChakraProvider>
  <Container>
          <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Layout />}>
      <Route path="Page1" exact element={<Page1 />} />
      <Route path="Page2" exact element={<Page2 />} />
      </Route>
        </Routes>
</BrowserRouter>


  



<Box bg='tomato' w='100%' p={4} color='white'>
<Center >
  This is the Box
  </Center>
<Container>
<Center >
  This is a simple homescreen that i designed
 

  </Center>
</Container>

</Box>



</Container>
    





  </ChakraProvider>);
}

export default App;
