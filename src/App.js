import { Box, Button, Container, Flex, FormControl, Heading, HStack, IconButton, Input, VStack } from "@chakra-ui/react";
import { FaMoon, FaPlus, FaTrash } from "react-icons/fa";
import './index.css';

function App() {

  const Todos = [
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
  ]

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
      h='520px'
      border='1px'
      boxShadow='lg'
      borderRadius='lg'
      borderStyle='solid'
      borderColor='gray'
      p='20px'>
        <Heading>TodoList</Heading>
        <Flex 
        mt='30px'
        gap='20px'
        >
          <FormControl>
           <Input type='text' placeholder='Add your new todo' h={12} />
          </FormControl>
          <Button colorScheme='green' h={12}>
            <FaPlus />
          </Button>
        </Flex>

        <Box>
        {Todos.map(({text}) => (
                <div key={Todos.id}
                style={{display: 'flex', gap: 20}}>
                   <Flex 
                   mt='20px'
                   bg='#f3f1f4'
                   h={12}
                   alignItems='center'
                   pl='20px'
                   borderRadius='lg'
                   w='300px'>
                     <p>{text}</p>
                   </Flex>
                   <Button
                   mt='22px'
                   h={12}
                   colorScheme='red'>
                  <FaTrash />
                </Button> 
                </div>
            ))}
        </Box>

         {/* clear all section */}
      <HStack 
      mt='100px'
      ml='260px'>
        <Button 
        size='md'
        colorScheme='purple'
        color='#fff'
        >
          Clear All
        </Button>
      </HStack>
      </Container>

   </VStack>
  );
}

export default App;
