import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme,} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Center, Square, Circle, Heading, Divider, Button, Text, SimpleGrid  } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import axios from 'axios';


const Page2 = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (<ChakraProvider>

     <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    
    </ChakraProvider>)

};

    export default Page2;