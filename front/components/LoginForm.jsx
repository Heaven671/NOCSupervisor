import { Button, Flex, Heading, Input, Box, useColorMode, useColorModeValue, IconButton, FormControl, FormHelperText, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { MoonIcon, SunIcon} from '@chakra-ui/icons'
import {useState} from 'react';
import {useRouter} from 'next/router';
import ThemeToggler from './ThemeToggler';


export default function LoginForm(){

  const { colorMode, toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const [value, setValue] = useState(false);
  const [click, setClickValue] = useState(false);
  const [input, setInput] = useState('');
  const isError = input === ''
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault;

    let response = await fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail: email, pass: password })
    })
    .catch((e) => {
      console.log('error: ');
      console.log(e);
    })
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

    return ( 
        <Flex height="60vh" alignItems="center" justifyContent="center" mt={100}>
        <FormControl isRequired alignItems ="center" justifyContent="center" flexDirection="flex" alignSelf="center" width={350} isInvalid={isError}>
          <Flex boxShadow="lg" direction="column" background={formBackground} p={12} rounded={6}>
          <ThemeToggler></ThemeToggler>
            <Heading mb={6}>Inscription</Heading>
            <FormLabel>Entrez votre adresse mail</FormLabel>
            <Input placeholder="aezeae@chakra-ui.com" variant="filled" mb={3} type="email" />
            <FormLabel>Confirmez votre adresse mail</FormLabel>
            <Input onChange={e => setEmail(e.currentTarget.value)} placeholder="aezeae@chakra-ui.com" variant="filled" mb={3} type="email" />
            <FormLabel>Entrez votre mot de passe</FormLabel>
            <Input onChange={e => setPassword(e.currentTarget.value)} placeholder="*******" variant="filled" mb={6} type="password" /> {isError ? (<FormHelperText>Entrez vos identifiants</FormHelperText>) : (<FormErrorMessage> Email is required </FormErrorMessage>) }
            <Button type="submit" colorScheme="teal" isLoading={value} onClick={handleSubmit}>Inscription</Button>
          </Flex>
        </FormControl>
        </Flex>
    );
}