import { Box, Flex, Heading, IconButton, useColorMode  } from "@chakra-ui/react";
import { FaMoon, FaSun } from 'react-icons/fa'

function Header () {
    const { colorMode, toggleColorMode } = useColorMode();
    return ( 
        <Box
        m='6'>
            <Flex 
            alignItems='center'
            justifyContent='space-between'>
                <Heading
                fontSize='2xl'
                bgGradient='linear(90deg, #FDBB2D 0%, #3A1C71 100%)'
                bgClip='text'>
                    Daily Tasks
                </Heading>
                <IconButton
                isRound='true'
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                size='lg'
                alignSelf='flex-end'
                onClick={toggleColorMode} />
                
            </Flex>
        </Box>
     );
}

export default Header;
