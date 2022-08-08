import {Flex,Box,Button,IconButton,VStack,useToast} from '@chakra-ui/react'
import {Icon, SettingsIcon} from '@chakra-ui/icons'
import {useRouter} from 'next/router';
import {Menu,MenuList,MenuButton,MenuItem} from '@chakra-ui/menu'
import {BiHome} from "react-icons/bi";
export default function Layout(){
    const toast = useToast();
    const router = useRouter();

    return (
                <VStack top='40vh' align='flex-start' alignItems='flex-start' verticalAlign='top' pos="absolute">
                        <IconButton height={"50px"} width={"50px"} children={<BiHome size={"25px"}/>} >

                        </IconButton>
                        <IconButton height={"50px"} width={"50px"}>

                        </IconButton>
                        <IconButton height={"50px"} width={"50px"}>

                        </IconButton>
                        <Menu>
                            <MenuButton as={Button} height={"50px"} width={"50px"} children={<SettingsIcon boxSize={5} />}>
                            </MenuButton>
                                <MenuList>
                                    <MenuItem>Profil</MenuItem>
                                    <MenuItem>Paramètres</MenuItem>
                                    <MenuItem onClick={() => {
                                        toast({
                                            title: 'Déconnexion en cours.',
                                            description: "Déconnexion.....",
                                            status: 'success',
                                            duration: 3000,
                                            isClosable: true,
                                            colorScheme: 'red'
                                        });
                                        router.push('/')

                                    }}>Déconnexion</MenuItem>
                                </MenuList>
                        </Menu>
                </VStack>
    )
}