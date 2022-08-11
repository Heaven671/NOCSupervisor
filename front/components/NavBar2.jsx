import {useEffect,useState} from 'react';
import {Flex,Box,Text,Center,Button,HStack} from '@chakra-ui/react';
import Image from 'next/image';

const NavBar2 = (props) => {


    return (
        <Box pos={'absolute'} bg={"gray.700"} height={'auto'} width={'100vw'}  border="black solid 1px"  >
            <Flex justifyContent={"space-between"}>
            <Image objectFit='cover' width='200px' height='50px' src="/images/rrf.png" />
                    <Button variant='ghost' width={'auto'} fontsize='lg' color="whitesmoke">Profil</Button>
                    <Button variant='ghost' width={'auto'} fontsize='lg' color="whitesmoke">Paramètres</Button>
                    <Box width="100px"></Box>
            </Flex>
        </Box>

    )
}

export default NavBar2;