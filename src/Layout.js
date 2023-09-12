import { Outlet, Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel, useTab } from '@chakra-ui/react'
import {  Container, ChakraProvider } from '@chakra-ui/react'
import {List,ListItem,ListIcon,OrderedList,UnorderedList,} from '@chakra-ui/react'
import { MdSettings, MdCheckCircle, MdWeekend } from 'react-icons/md'

const Layout = () => {
  return (<ChakraProvider>
    <Container>
    <>



    <Tabs isFitted variant='enclosed' colorScheme='green' align='center'>
  <TabList>
    <Tab>Repairs Category</Tab>



  </TabList>

  <TabPanels>


    <TabPanel>
    <List>
    <ListItem>
    <ListIcon as={MdWeekend} color='green.500' />
    <Link to="/Page1">Page1</Link>
  </ListItem>
  </List>
</TabPanel>



  </TabPanels>
</Tabs>
<Outlet />
    </>
    </Container>
    </ChakraProvider>
  )
};

export default Layout;