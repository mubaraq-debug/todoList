import { Box,
  Button,
  Container, 
  Flex, 
  FormControl, 
  Heading, 
  HStack, 
  IconButton, 
  Input, 
  VStack 
}  from "@chakra-ui/react";
import { FaMoon, FaPlus, FaTrash } from "react-icons/fa";
import './index.css';
import { useState } from 'react';
import { nanoid } from "nanoid";


function App() {

  //adding a list item

  const [listitem, setListitem] = useState('');

  function handleChange(e) {
    setListitem(e.target.value);
  }

  function handleAdd(e) {
    const newTodos = todos.concat();
    setTodos(newTodos);
  }

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Buy Groceries'
    },
    {
      id: 2,
      text: 'Do Laundry'
    },
    {
      id: 3,
      text: 'Go to the Cinema'
    }
  ]);
  
  //deleting an item
  const removeElement = (id) => {
    const newTodos = todos.filter(
      (todo) => todo.id !== id
    );
    setTodos(newTodos);
  };

  const removeAll = () => {
    document.getElementById('lists').style.display = 'none';
  }

  return (
   <VStack>

      {/* darkmode section */}
      <HStack 
      alignSelf='flex-end'
      m='30px'>
        <IconButton isRound='true'>
          <FaMoon />
        </IconButton>
      </HStack>

      {/* task listing part */}

      <Container 
      w='400px'
      h='100%'
      border='1px'
      boxShadow='lg'
      borderRadius='lg'
      borderStyle='solid'
      borderColor='gray'
      p='20px'
      >
        <Heading>TodoList</Heading>
        <Flex 
        mt='30px'
        gap='20px'
        >
          <FormControl>
           <Input type='text' placeholder='Add your new todo' h={12} value={listitem} onChange={handleChange} />
          </FormControl>
          <Button colorScheme='green' h={12} onClick={() => handleAdd()} >
            <FaPlus />
          </Button>
        </Flex>

        <Box id='lists'>
        {todos.map((todo) => (
                <div key={todos.id}
                style={{display: 'flex', gap: 20}}>
                   <Flex 
                   mt='20px'
                   bg='#f3f1f4'
                   h={12}
                   alignItems='center'
                   pl='20px'
                   borderRadius='lg'
                   w='300px'>
                     <p>{todo.text}</p>
                   </Flex>
                   <Button
                   mt='22px'
                   h={12}
                   colorScheme='red'
                   onClick={() => removeElement(todo.id)}
                   >
                  <FaTrash />
                </Button> 
                </div>
            ))}
        </Box>

         {/* clear all section */}
      <HStack 
      mt='20px'
      ml='260px'>
        <Button 
        size='md'
        colorScheme='purple'
        color='#fff'
        onClick={() => removeAll()}
        >
          Clear All
        </Button>
      </HStack>
      </Container>

   </VStack>
  );
}

export default App;
