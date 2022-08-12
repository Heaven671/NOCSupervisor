import {useEffect,useState} from 'react';
import {Flex,Box,Text,Center,Button,HStack,VStack,Menu,MenuButton,MenuList,MenuItem, Avatar, AvatarBadge, AvatarGroup} from '@chakra-ui/react';
import Image from 'next/image';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavBar2 = (props) => {


    return (
        <Box pos={'absolute'} bg={"gray.700"} height={'auto'} width={'100vw'}  border="black solid 1px"  >
            <Flex justifyContent={"space-between"}>
            <Image objectFit='cover' width='280px' height='80px' src="/images/rrf.png" />
                <HStack>
                    <Menu>
                        <MenuButton
                            height='auto'
                            width='auto'
                            mr={"10vw"} 
                            as={Button} 
                            rightIcon={<ChevronDownIcon/>}
                            transition='all 0.2s'
                            borderRadius='md'
                            borderWidth='1px'
                            _hover={{ bg: 'gray.300' }}
                            _expanded={{ bg: 'gray.300' }}
                            _focus={{ boxShadow: 'outline' }}>
                            <Avatar height="50px" width="50px" name={`${props.username}`}/>
                            Compte
                        </MenuButton>
                        <MenuList>
                            <Center>
                                <VStack>
                                    <MenuItem variant='ghost' width={'auto'} fontSize='lg' color="whitesmoke">Profil</MenuItem>
                                    <MenuItem variant='ghost' width={'auto'} fontSize='lg' color="whitesmoke">Paramètres</MenuItem>
                                </VStack>
                            </Center>      
                        </MenuList>
                    </Menu>
                </HStack>
            </Flex>
        </Box>

    )
}

export default NavBar2;