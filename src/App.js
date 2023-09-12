import React from 'react';
import { ChakraProvider, theme,} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Container } from '@chakra-ui/react'
import Page1 from './page1';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react';




function App() {
  return (<ChakraProvider>
  <Container>
          <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Layout />}>
      <Route path="Page1" exact element={<Page1 />} />

      </Route>
        </Routes>
</BrowserRouter>
</Container>
    





  </ChakraProvider>);
}

export default App;
