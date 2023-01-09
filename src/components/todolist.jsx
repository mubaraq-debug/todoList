import { Box, Container,  Heading, HStack, IconButton, Spacer, StackDivider, Text, VStack, Input, Button } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function TodoList() {

 


    const [todos, setTodos] = useState(
        () => JSON.parse(localStorage.getItem('todos')) || []
      );
    
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
    
      function addTodo(todo) {
        setTodos([...todos, todo]);
      }
   
    const removeElement = (id) => {
        const newTodos = todos.filter(
          (todo) => todo.id !== id
        );
        setTodos(newTodos);
      };

  function handleSubmit(e) {
    e.preventDefault();


    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');


    return ( 
        <Box>
            <Container>
                <VStack
                  borderColor='gray.100'
                  borderWidth='2px'
                  p='4'
                  divider={<StackDivider />}
                  borderRadius='lg'
                  w='100%'
                  maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
                  alignItems='stretch'>
                    <Heading
                    size='lg'>Tasks</Heading>
                        {todos.map((todo) => (
                            <HStack key={todo.id}>
                                <Text
                                fontSize='sm'>{todo.text}</Text>
                                <Spacer />
                                <IconButton
                                icon={<FaTrash />} 
                                onClick={() => removeElement(todo.id)} 
                                isRound = 'true'
                                bg='red'
                                color='white'
                                />
                            </HStack>
                        ))}
                </VStack>

                <form onSubmit={handleSubmit}>
                    <HStack mt='8'>
                        <Input
                        variant='filled'
                        placeholder='what would you like to do?'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        />
                        <Button colorScheme='green' px='8' type='submit'>
                        Add Task
                        </Button>
                    </HStack>
                </form>
            </Container>
        </Box>
     );
}

export default TodoList;
