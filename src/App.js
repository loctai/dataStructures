import { useState } from 'react';
import { Container, Stack, Button, ChakraProvider } from "@chakra-ui/react"
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import 'treeflex/dist/css/treeflex.css';

import LinkedList from './pages/LinkedList';
import './App.css';
import BinaryTree from './pages/BinaryTree';


function App() {
const [mode, setMode] = useState(); 
const handleChangeMode = (mode) => {
  $( "#explode" ).toggle( "explode" );
  setTimeout(()=> setMode(mode),1000)
  
}
  
const Stucktures = () => {
  return (
    <Stack spacing={4} direction="row" id="explode">
      <Button colorScheme="teal" size="lg" onClick={() => handleChangeMode('linkedList')}>
        Linked List
      </Button>
      <Button colorScheme="teal" size="lg" onClick={() => handleChangeMode('tree')}>
        Binary Tree
      </Button>
      <Button colorScheme="teal" size="lg">
        Queue
      </Button>
      <Button colorScheme="teal" size="lg">
        Stack
      </Button>
  </Stack>
  )
}
  return (
   
    <ChakraProvider>
    
       <Container minWidth="100vw" display={'flex'} flexDirection={'column'}  alignItems={'center'} {...(!mode && { height: "100vh", justifyContent: 'center' })}>
       
       <Stucktures/>
       
       {mode === 'linkedList'?
       <LinkedList/>: mode === 'tree'? <BinaryTree />: ''}
       </Container>   
      
    </ChakraProvider>
  );
}

export default App;
